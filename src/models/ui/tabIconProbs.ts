interface Route {
  name: string;
}

interface TabIconProbs {
  focused?: boolean;
  size: number;
  color: string;
  route: Route;
}
export type {TabIconProbs};
