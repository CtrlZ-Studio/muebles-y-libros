import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ project }) => {
  return (
    <div className="w-56 lg:w-96 hover:opacity-25 tw-animation">
      <Link href={`/projects/${project.slug}`}>
        <a>
          <Image
            src={project.coverImage.url}
            width={project.coverImage.width}
            height={project.coverImage.height}
            objectFit="cover"
            objectPosition="center"
          />
        </a>
      </Link>
    </div>
  );
};

export default ProjectCard;
