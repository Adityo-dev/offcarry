import Image from "next/image";

function Banner3() {
  return (
    <section className="w-full h-full">
      <Image
        src={"/images/banner3.png"}
        width={1600}
        height={1600}
        alt=""
        className="w-full h-full object-cover"
      />
    </section>
  );
}

export default Banner3;
