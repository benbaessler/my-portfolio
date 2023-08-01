import Image, { StaticImageData } from "next/image";
import GitHubIcon from "@/assets/icons/github.png";
import CallMadeIcon from '@mui/icons-material/CallMade';

interface Props {
  title: string;
  description: string;
  workDescription: string;
  tags: string[];
  image: StaticImageData;
  githubLink: string;
  link?: string;
}

const Project = ({
  title,
  description,
  workDescription,
  tags,
  image,
  githubLink,
  link,
}: Props) => (
  <div className="bg-slate-800 p-10 flex flex-col gap-5 sm:flex-row mb-5">
    <Image src={image} alt={title} className="w-20 h-20 sm:w-28 sm:h-28" />
    <div className="flex flex-col ml-5 space-y-4">
      <div className="flex justify-between">
        <div className="flex">
          <h3 className="text-2xl font-semibold mr-3">{title}</h3>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100"
            >
              <CallMadeIcon />
            </a>
          )}
        </div>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <Image
            src={GitHubIcon}
            alt={`${title} GitHub`}
            className="h-7 w-7 opacity-80 hover:opacity-100"
          />
        </a>
      </div>
      <p>{description}</p>
      <p>{workDescription}</p>
      <div>
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-sky-400 bg-indigo-800 rounded-full px-3 py-2 mr-3"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Project;
