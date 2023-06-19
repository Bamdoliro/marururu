import { MouseEventHandler, useCallback, useState } from "react";

const useFormPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const moveNextPage = useCallback(
    () => setCurrentPage((prev) => prev + 1),
    []
  );
  const movePreviousPage = useCallback(
    () => setCurrentPage((prev) => prev - 1),
    []
  );
  const movePage: MouseEventHandler<HTMLDivElement> = (e) => {
    setCurrentPage(Number((e.target as HTMLDivElement).innerText));
  };
  return { currentPage, moveNextPage, movePreviousPage, movePage };
};

export default useFormPage;
