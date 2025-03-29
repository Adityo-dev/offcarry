import Image from "next/image";
import Link from "next/link";

function loading() {
  return (
    <section className="container mx-auto px-4 min-h-[85vh] py-12 flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl md:text-4xl lg:text-5xl">loading ...</h2>
    </section>
  );
}

export default loading;
