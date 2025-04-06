import SliderProduct from "../sliderProducts/SliderProducts";

function RelatedProducts({ products = [] }) {
  return (
    <section className="pb-14">
      {products.length > 0 && (
        <SliderProduct title={"Related Products"} products={products} />
      )}
    </section>
  );
}

export default RelatedProducts;
