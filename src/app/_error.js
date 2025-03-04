"use client";
import Link from "next/link";

function ErrorPage({ statusCode }) {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>
        {statusCode
          ? `An error ${statusCode} occurred on the server`
          : "An error occurred on the client"}
      </h1>
      <p>
        {statusCode === 404
          ? "The page you're looking for doesn't exist."
          : "Please try again later."}
      </p>
      <Link href="/">
        <a>Go back to the homepage</a>
      </Link>
    </div>
  );
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
