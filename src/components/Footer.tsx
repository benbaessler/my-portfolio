import Image from "next/image";
import VercelIcon from "@/assets/icons/vercel.png";

const Footer = () => {
  return (
    <footer className="place-content-between bg-black p-2 text-xs text-slate-500">
      
      <div className="flex items-center">
        <Image
          src={VercelIcon}
          alt="Vercel"
          width={20}
          height={20}
          className="rounded-full mr-4"
        />
        <p>Powered by Vercel</p>
      </div>
    </footer>
  );
};

export default Footer;
