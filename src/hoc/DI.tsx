import ErrorBoundary from "@/components/ErrorBoundary";

const DI = (Component: any) => {
  return function (props: any) {
    // const user = useAuthStore((s) => s.user);

    return (
      <ErrorBoundary fallback={<div>Component has failed render</div>}>
        <Component {...props}>{props.children}</Component>
      </ErrorBoundary>
    );
  };
};

export default DI;
