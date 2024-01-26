import { useEffect, useState } from 'react';

const useMount = (fn?: () => void) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    fn && fn();
    setIsMounted(true);
  }, [fn]);

  return { isMounted };
}

export default useMount;