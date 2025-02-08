import Image from "next/image";

// Newsletter Component
function Newsletter() {
  return (
    <section className="w-full h-[250px] bg-gradient-primary py-16 px-28 rounded-lg relative">
      <div className="absolute -top-16 left-16">
        <Image
          src={"/images/3d-yellow-bell.png"}
          width={400}
          height={400}
          alt=""
          className="max-w-32 h-full"
        />
      </div>
      <div className="flex justify-between pl-32">
        <h2 className="text-4xl leading-[50px] text-white font-semibold mb-4">
          Let’s Join Us <br /> Today
        </h2>

        <div className="flex flex-col gap-2 justify-center">
          <p className="text-lg text-[#DDE2E5]">
            We don’t send spam so don’t worry
          </p>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-80 py-3 px-6 rounded-l-md text-black placeholder-[#ACB5BD] focus:outline-none"
            />
            <button className="bg-primary text-white px-6 py-3 rounded-r-md font-semibold hover:bg-secondary transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
