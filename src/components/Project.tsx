import Image, { StaticImageData } from "next/image";
import GitHubIcon from "@/assets/icons/github.png";
import CallMadeIcon from "@mui/icons-material/CallMade";

interface Props {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  link?: string;
}

const Project = ({ title, description, tags, githubLink, link }: Props) => (
  <div className="bg-slate flex flex-col sm:flex-row mb-10 max-w-xl">
    <div className="flex flex-col space-y-4">
      <div className="flex items-center">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <h3 className="text-xl font-semibold mr-3 hover:text-slate-200">
            {title}
          </h3>
        </a>
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
      <p className="text-md">{description}</p>
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
