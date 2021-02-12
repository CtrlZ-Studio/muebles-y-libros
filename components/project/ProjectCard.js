import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ project }) => {
  return (
    <div className="w-56 lg:w-96 2xl:w-2xl transform hover:opacity-75 hover:scale-95 lg:hover:skew-x-3 lg:hover:skew-y-3 tw-animation font-bold">
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
