import Image from "next/image";

// Newsletter Component
function Newsletter() {
  return (
    <section className="w-full bg-gradient-primary px-6 lg:px-28  py-10 lg:py-16  rounded-lg relative">
      <div className="lg:absolute lg:-top-16 lg:left-16 flex justify-center lg:block mb-4 lg:mb-0">
        <Image
          src={"/images/3d-yellow-bell.png"}
          width={400}
          height={400}
          alt="Notification Bell"
          className="w-20 lg:w-32 h-auto"
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-between xl:pl-32 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl lg:leading-[50px] text-white font-semibold mb-2 lg:mb-4">
          Let’s Join Us <br className="hidden lg:block" /> Today
        </h2>

        <div className="flex flex-col gap-2 items-center lg:items-start">
          <p className="lg:text-lg text-[#DDE2E5] font-medium">
            We don’t send spam so don’t worry
          </p>

          <div className="sm:max-w-[80%] lg:max-w-full flex flex-col sm:flex-row w-full mt-4 lg:mt-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full lg:w-80 py-3 px-4 rounded-md sm:rounded-r-none text-black placeholder-[#ACB5BD] focus:outline-none"
            />
            <button className="bg-primary text-white px-6 py-3 mt-2 sm:mt-0 rounded-md sm:rounded-r-md sm:rounded-l-none font-semibold hover:bg-secondary transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
