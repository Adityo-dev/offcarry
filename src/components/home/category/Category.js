import CategorySlider from "./CategorySlider";

async function Category() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUT_URL}/shop/categories`
  );

  const categoriesData = await response.json();

  return (
    <section>
      <CategorySlider sliderData={categoriesData} />
    </section>
  );
}

export default Category;
