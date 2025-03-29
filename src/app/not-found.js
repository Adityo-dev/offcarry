import Image from "next/image";
import Link from "next/link";

function NotFound() {
  return (
    <section className="container mx-auto px-4 min-h-[85vh] py-12 flex flex-col items-center justify-center text-center">
      <div className="w-full h-full flex items-center justify-center">
        <Image
          src={"/gif/404.gif"}
          width={300}
          height={300}
          alt="404 Error - The page you are looking for does not exist."
          className="max-w-[450px] w-full h-auto"
        />
      </div>
      <div className="space-y-4 px-4">
        <h2 className="text-2xl md:text-4xl lg:text-5xl">
          Oops! Page not found
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-600">
          Whoops, this is embarrassing. Looks like the page you were looking for
          was not found.
        </p>
      </div>

      <Link
        className="text-xs sm:text-sm md:text-base transition-all duration-200 text-white bg-gradient-primary font-semibold  rounded-lg px-5 py-2 sm:px-6 sm:py-3 mt-6 tracking-widest"
        href={"/"}
      >
        Go to Home
      </Link>
    </section>
  );
}

export default NotFound;
