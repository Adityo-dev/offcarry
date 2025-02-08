import Category from "../category/Category";

function Hero() {
  return (
    <section className="w-full h-[75vh] bg-[#F1F1F1]">
      <div className="container mx-auto px-4 pt-6">
        <Category />
        <div>
          <p>Hi</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
