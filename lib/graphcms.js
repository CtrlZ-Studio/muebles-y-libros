import { gql } from 'graphql-request';

async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.GRAPHCMS_PROD_AUTH_TOKEN}`
    },
    body: JSON.stringify({
      query,
      variables
    })
  });
  const json = await res.json();

  if (json.errors) {
    console.log(process.env.NEXT_GCMS_PROJECT_ID);
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getAllProjectsWithSlug() {
  const data = await fetchAPI(
    gql`
      {
        projects {
          slug
        }
      }
    `
  );
  return data.projects;
}

export async function getAllProjects() {
  const data = await fetchAPI(
    gql`
      {
        projects {
          title
          slug
          date
          coverImage {
            url
            width
            height
          }
        }
      }
    `
  );
  return data.projects;
}

export async function getProject(slug) {
  const data = await fetchAPI(
    gql`
      query ProjectBySlug($slug: String!) {
        project(where: { slug: $slug }) {
          title
          slug
          date
          description {
            html
          }
          coverImage {
            url
            width
            height
          }
          gallery {
            url
            width
            height
          }
        }
      }
    `,
    {
      variables: {
        slug
      }
    }
  );
  return data;
}

export async function getHome() {
  const data = await fetchAPI(
    gql`
      {
        section(where: { apiQuery: "home" }) {
          heading
          images {
            url
            width
            height
          }
          heroImage {
            url
            width
            height
          }
          seoMetadata {
            id
            title
            description
            keywords
          }
        }
      }
    `
  );
  return data.section;
}

export async function getAbout() {
  const data = await fetchAPI(
    gql`
      {
        section(where: { apiQuery: "about" }) {
          heading
          body {
            html
          }
          heroImage {
            url
            width
            height
          }
        }
      }
    `
  );
  return data.section;
}

export async function getContact() {
  const data = await fetchAPI(
    gql`
      {
        section(where: { apiQuery: "contact" }) {
          heading
          body {
            html
          }
          heroImage {
            url
            width
            height
          }
        }
      }
    `
  );
  return data.section;
}
