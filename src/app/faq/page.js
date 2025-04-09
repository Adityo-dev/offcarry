async function Faq() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUT_URL}/pages/faq`,
    { cache: "no-store" }
  );
  const faqPage = await response.json();

  return (
    <main
      className="container mx-auto px-2 pt-16 xl:pt-6"
      dangerouslySetInnerHTML={{
        __html: faqPage?.content || "<p>No content found.</p>",
      }}
    />
  );
}

export default Faq;
