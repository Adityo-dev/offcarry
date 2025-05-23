async function PaymentPolicy() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUT_URL}/pages/payment-policy`,
    { cache: "no-store" }
  );
  const paymentPage = await response.json();

  return (
    <main
      className="container mx-auto px-2 pt-24 xl:pt-6"
      dangerouslySetInnerHTML={{
        __html: paymentPage?.content || "<p>No content found.</p>",
      }}
    />
  );
}

export default PaymentPolicy;
