async function ReturnRefundPolicy() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUT_URL}/pages/return-refund-policy`,
    { cache: "no-store" }
  );
  const returnRefundPage = await response.json();

  return (
    <main
      className="container mx-auto px-2 pt-16 xl:pt-6"
      dangerouslySetInnerHTML={{
        __html: returnRefundPage?.content || "<p>No content found.</p>",
      }}
    />
  );
}

export default ReturnRefundPolicy;
