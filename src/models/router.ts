export interface PrivateRouteI {
  children: JSX.Element | JSX.Element[];
}

export interface RouteI {
  path: string;
  Component: React.ElementType;
  isPrivate?: boolean;
  children?: RouteI[];
  props?: object;
  privateRouteProps?: PrivateRouteI;
}
