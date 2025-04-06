import Image from "next/image";
import Link from "next/link";

function loading() {
  return (
    <section className="container mx-auto px-2 min-h-[85vh] py-12 flex flex-col items-center justify-center text-center">
      <div class="spinner"></div>
    </section>
  );
}

export default loading;
