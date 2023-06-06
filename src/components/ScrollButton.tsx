import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
interface Props {
  handleScroll: React.MouseEventHandler<HTMLDivElement>;
}

const ScrollButton = ({ handleScroll }: Props) => (
  <div
    onClick={handleScroll}
    className="button fixed bottom-10 md:inset-x-0 md:mx-auto right-10 md:right-0 h-12 w-12 cursor-pointer flex items-center justify-center text-lg"
  >
    <ArrowDownwardIcon fontSize="large" />
  </div>
);

export default ScrollButton;
