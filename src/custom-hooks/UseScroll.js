import React, { useEffect, useState } from "react";

const UseScroll = () => {
  const [searchTool, setSearchtool] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 12 && !searchTool) {
      setSearchtool(true);
    } else if (window.scrollY < 12 && searchTool) {
      setSearchtool(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [searchTool]);

  return { searchTool };
};

export default UseScroll;
