import React, { useCallback, useRef } from "react";

const InfiniteScroll = ({ loadMore, hasMore, children, threshold = 300 }) => {
  const observer = useRef();

  const lastElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            loadMore();
          }
        },
        { rootMargin: `${threshold}px` }
      );

      if (node) observer.current.observe(node);
    },
    [loadMore, hasMore, threshold]
  );

  return (
    <div>
      {children}
      <div ref={lastElementRef} />
    </div>
  );
};

export default InfiniteScroll;
