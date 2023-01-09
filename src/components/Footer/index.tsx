import "./style.css";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const timer = setTimeout(() => {
      setYear(new Date().getFullYear());
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="footer">
      <span>© {year} Ben Baessler. All rights reserved.</span>
      <span>
        Logo by{" "}
        <a href="https://www.vecteezy.com/" target="_blank">
          vecteezy.com
        </a>
      </span>
    </div>
  );
}
