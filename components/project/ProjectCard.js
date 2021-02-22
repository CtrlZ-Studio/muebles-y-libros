import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ project }) => {
  return (
    <div className="w-64 lg:w-72 2xl:w-96 hover:opacity-75 hover:scale-95 lg:hover:skew-x-3 lg:hover:skew-y-3 tw-animation">
      <Link href={`/projects/${project.slug}`}>
        <a>
          <Image
            alt={project.coverImage.alt}
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
