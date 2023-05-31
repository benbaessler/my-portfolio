export interface ButtonProps {
  text: string;
  href: string;
}

const Button = ({ text, href }: ButtonProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-indigo-700 px-8 py-4 rounded-full transition-colors duration-200 hover:bg-indigo-800"
  >
    {text}
  </a>
);

export default Button;
