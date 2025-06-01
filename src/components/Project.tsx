interface Props {
  title: string;
  description: string;
  tags: string[];
  links: Link[];
}

interface Link {
  title: string;
  href: string;
}

const Project = ({ title, description, tags, links }: Props) => (
  <div className="bg-slate flex flex-col sm:flex-row mb-10 max-w-xl">
    <div className="flex flex-col space-y-3">
      <div className="flex items-center">
        <h3 className="text-xl font-semibold mr-3 hover:text-slate-200">
          {title}
        </h3>
      </div>
      <p className="text-md">{description}</p>

      <div className="links flex gap-4 text-sm pb-2">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{link.title}</span>
          </a>
        ))}
      </div>

      <div>
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-slate-300	bg-indigo-800 rounded-full px-3 py-2 mr-3"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Project;
