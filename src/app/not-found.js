function NotFound() {
  return (
    <section className="container mx-auto px-4 flex flex-col items-center justify-center">
      <h1 className="text-[340px] font-semibold">404</h1>
      <div className="text-center space-y-4">
        <h2 className="text-5xl"> Oops! Page not found</h2>
        <p>
          Whoops, this is embarassing. Looks like the page you were looking for
          was not found.
        </p>
      </div>
    </section>
  );
}

export default NotFound;
