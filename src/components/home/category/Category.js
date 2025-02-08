import CategorySlider from "./CategorySlider";

// CATEGORY DATA
const categoryData = [
  {
    image: "/images/clean.png",
    title: "T-Shirts",
    url: "#",
  },
  {
    image: "/images/headphones.png",
    title: "HeadPhone",
    url: "#",
  },
  {
    image: "/images/laptop-screen.png",
    title: "Laptops",
    url: "#",
  },
  {
    image: "/images/joystick.png",
    title: "Games",
    url: "#",
  },
  {
    image: "/images/smartphone.png",
    title: "SmartPhones",
    url: "#",
  },
  {
    image: "/images/loud-speaker.png",
    title: "Speakers",
    url: "#",
  },

  {
    image: "/images/tv.png",
    title: "Television",
    url: "#",
  },
  {
    image: "/images/ipad.png",
    title: "Tablets",
    url: "#",
  },
];

function Category() {
  return (
    <section>
      <CategorySlider sliderData={categoryData} />
    </section>
  );
}

export default Category;
