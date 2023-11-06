export {};

declare global {
  interface RouteType {
    path: string;
    component: React.ReactNode;
    exact: boolean;
    roles: string[];
    private?: boolean;
    showHeaderSidebar?: boolean;
  }

  type UserRole =
    | "SBM" // SHECOM branch manager
    | "CSM" // NST Customer Success Manager
    | "FBBM"; // Federal Bank Branch Manager
}
