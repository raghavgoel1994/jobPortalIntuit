import { useEffect, useState } from "react";

const useMediaQuery = () => {
  const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(
    window.innerWidth > 1224
  );
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 768 && window.innerWidth <= 1224
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopOrLaptop(window.innerWidth > 1224);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 1224);
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isDesktopOrLaptop, isTablet, isMobile };
};

export default useMediaQuery;
