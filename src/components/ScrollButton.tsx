import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
interface Props {
  handleScroll: React.MouseEventHandler<HTMLDivElement>;
}

const ScrollButton = ({ handleScroll }: Props) => (
  <div
    onClick={handleScroll}
    className="button rounded fixed w-8 h-8 bottom-7 md:inset-x-0 md:mx-auto right-7 md:right-0 transform cursor-pointer flex items-center justify-center"
  >
    <ArrowDownwardIcon fontSize="small" style={{ color: "white" }} />
  </div>
);

export default ScrollButton;
