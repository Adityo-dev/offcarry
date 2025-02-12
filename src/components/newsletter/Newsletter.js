import Image from "next/image";

// Newsletter Component
function Newsletter() {
  return (
    <section className="w-full bg-gradient-primary py-10 px-6 sm:py-16 sm:px-28 rounded-lg relative">
      <div className="sm:absolute sm:-top-16 sm:left-16 flex justify-center sm:block mb-4 sm:mb-0">
        <Image
          src={"/images/3d-yellow-bell.png"}
          width={400}
          height={400}
          alt="Notification Bell"
          className="w-20 sm:w-32 h-auto"
        />
      </div>

      <div className="flex flex-col sm:flex-row justify-between sm:pl-32 text-center sm:text-left">
        <h2 className="text-2xl sm:text-4xl sm:leading-[50px] text-white font-semibold mb-2 sm:mb-4">
          Let’s Join Us <br className="hidden sm:block" /> Today
        </h2>

        <div className="flex flex-col gap-2 items-center sm:items-start">
          <p className="sm:text-lg text-[#DDE2E5]">
            We don’t send spam so don’t worry
          </p>

          <div className="flex flex-col sm:flex-row w-full mt-4 sm:mt-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-80 py-3 px-4 rounded-md sm:rounded-l-md text-black placeholder-[#ACB5BD] focus:outline-none"
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
