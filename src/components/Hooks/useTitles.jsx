import React, { useEffect } from "react";

function useTitles(title) {
  useEffect(() => {
    document.title = ` ${title} ` || "Lines of Code Technolgies";
  }, [title]);

  return <div></div>;
}

export default useTitles;
