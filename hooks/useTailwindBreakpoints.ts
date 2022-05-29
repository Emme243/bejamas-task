import useMediaQuery from './useMediaQuery';

function useTailwindBreakpoints() {
  const isScreenLarge = useMediaQuery('(min-width: 1024px)');
  return { isScreenLarge };
}

export default useTailwindBreakpoints;
