import { MouseEventHandler, useState } from 'react';

const useFormPage = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // 다음 페이지로 이동
    const moveNextPage = () => setCurrentPage((prev) => prev + 1);

    // 이전 페이지로 이동
    const movePreviousPage = () => setCurrentPage((prev) => prev - 1);

    // 페이지 이동
    const movePage: MouseEventHandler<HTMLDivElement> = (e) => {
        setCurrentPage(Number((e.target as HTMLDivElement).innerText));
    };

    return { currentPage, moveNextPage, movePreviousPage, movePage };
};

export default useFormPage;
