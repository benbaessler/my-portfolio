import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
interface Props {
  handleScroll: React.MouseEventHandler<HTMLDivElement>;
}

const ScrollButton = ({ handleScroll }: Props) => (
  <div
    onClick={handleScroll}
    className="button fixed w-11 h-11 bottom-10 md:inset-x-0 md:mx-auto right-10 md:right-0 transform hover:scale-105 cursor-pointer flex items-center justify-center"
  >
    <ArrowDownwardIcon fontSize="medium" style={{ color: "white" }} />
  </div>
);

export default ScrollButton;
