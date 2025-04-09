async function CancellationPolicy() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUT_URL}/pages/cancellation-policy`,
    { cache: "no-store" }
  );
  const cancellationPage = await response.json();

  return (
    <main
      className="container mx-auto px-2 pt-16 xl:pt-6"
      dangerouslySetInnerHTML={{
        __html: cancellationPage?.content || "<p>No content found.</p>",
      }}
    />
  );
}

export default CancellationPolicy;
