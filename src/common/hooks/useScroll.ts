import { useEffect } from 'react';

export const useScrollListener = (setPageSize, pageSize, isFetching) => {
    useEffect(() => {const onScroll = () => {
            const scrolledToBottom =
                window.innerHeight + window.scrollY >= document.body.offsetHeight;
            if (scrolledToBottom && !isFetching) {
                setPageSize(pageSize + 10);
            }
        };

        document.addEventListener("scroll", onScroll);

        return function () {
            document.removeEventListener("scroll", onScroll);
        };
    }, [pageSize, isFetching]);
};

