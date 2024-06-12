import { useEffect } from "react";

export const Iceberg = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1>Iceberg</h1>
    </>
  );
};
