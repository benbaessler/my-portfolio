interface Props {
  title: string;
  companyName: string;
  companySite: string;
  description: string;
  tags: string[];
}

const Job = ({ title, companyName, companySite, description, tags }: Props) => (
  <div className="bg-slate flex flex-col sm:flex-row mb-10 max-w-xl">
    <div className="flex flex-col space-y-4">
      <div className="flex items-center">
        <h3 className="text-xl font-semibold mr-2">{title}</h3>
        <h4 className="text-l opacity-70">
          @{" "}
          <a
            href={companySite}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 hover:text-slate-300"
          >
            {companyName}
          </a>
        </h4>
      </div>
      <span className="text-slate-300">2022 - 2023</span>
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

export default Job;
