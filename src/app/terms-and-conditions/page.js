async function TermsAndConditions() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUT_URL}/pages/terms-&-conditions`,
    { cache: "no-store" }
  );
  const termsPage = await response.json();

  return (
    <main
      className="container mx-auto px-2 pt-24 xl:pt-6"
      dangerouslySetInnerHTML={{
        __html: termsPage?.content || "<p>No content found.</p>",
      }}
    />
  );
}

export default TermsAndConditions;
