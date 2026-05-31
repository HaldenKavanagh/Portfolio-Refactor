import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  let heading = "Error";
  let message = "Something went wrong.";

  if (isRouteErrorResponse(error)) {
    heading = String(error.status);
    message = error.statusText || message;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <main className="min-h-screen grain grid place-items-center px-6 text-center">
      <div className="reveal in flex flex-col items-center gap-6">
        <p className="text-mint font-semibold tracking-[0.2em] text-xs uppercase">
          Page not found
        </p>
        <h1 className="font-display font-bold text-7xl sm:text-8xl text-chalk leading-none">
          {heading}
        </h1>
        <p className="text-lg text-sage max-w-md">{message}</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-mint text-base font-semibold px-6 py-3 rounded-xl hover:bg-mint-lite transition"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
