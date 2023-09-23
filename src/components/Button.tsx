interface Props {
  text: string;
  href: string;
}

const Button = ({ text, href }: Props) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="button px-6 py-3"
  >
    {text}
  </a>
);

export default Button;
