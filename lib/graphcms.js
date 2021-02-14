import { gql } from 'graphql-request';

async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        preview
          ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
          : process.env.GRAPHCMS_PROD_AUTH_TOKEN
      }`
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

export async function getPreviewProjectBySlug(slug) {
  const data = await fetchAPI(
    `
    query ProjectBySlug($slug: String!, $stage: Stage!) {
      project(where: {slug: $slug}, stage: $stage) {
        slug
      }
    }`,
    {
      preview: true,
      variables: {
        stage: 'DRAFT',
        slug
      }
    }
  );
  return data.project;
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

export async function getAllProjects(preview) {
  const data = await fetchAPI(
    gql`
      {
        projects(orderBy: date_DESC, first: 20) {
          title
          slug
          date
          coverImage {
            width
            height
            url
          }
        }
      }
    `,
    { preview }
  );
  return data.projects;
}

export async function getProject(slug, preview) {
  const data = await fetchAPI(
    gql`
      query ProjectBySlug($slug: String!, $stage: Stage!) {
        project(stage: $stage, where: { slug: $slug }) {
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
          seoMetadata {
            title
            description
            keywords
          }
        }
      }
    `,
    {
      preview,
      variables: {
        stage: preview ? 'DRAFT' : 'PUBLISHED',
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
          heroImage {
            url
            width
            height
          }
          seoMetadata {
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

export async function getWork() {
  const data = await fetchAPI(
    gql`
      {
        section(where: { apiQuery: "work" }) {
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
