// ref: https://stackoverflow.com/a/49906662/6728679

import React from "react";

export function useIsMounted() {
  const isMounted = React.useRef(true);

  React.useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted; // returning "isMounted.current" wouldn't work because we would return unmutable primitive
}
