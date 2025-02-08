import CategorySlider from "./CategorySlider";

// CATEGORY DATA
const categoryData = [
  {
    image: "",
    title: "T-Shirts",
    url: "#",
  },
  {
    image: "",
    title: "Laptops",
    url: "#",
  },
  {
    image: "",
    title: "Games",
    url: "#",
  },
  {
    image: "",
    title: "SmartPhones",
    url: "#",
  },
  {
    image: "",
    title: "Speakers",
    url: "#",
  },
  {
    image: "",
    title: "HeadPhone",
    url: "#",
  },
  {
    image: "",
    title: "Television",
    url: "#",
  },
  {
    image: "",
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
