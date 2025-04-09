async function ShippingPolicy() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUT_URL}/pages/shipping-policy`,
    { cache: "no-store" }
  );
  const shippingPage = await response.json();

  return (
    <main
      className="container mx-auto px-2 pt-16 xl:pt-6"
      dangerouslySetInnerHTML={{
        __html: shippingPage?.content || "<p>No content found.</p>",
      }}
    />
  );
}

export default ShippingPolicy;
