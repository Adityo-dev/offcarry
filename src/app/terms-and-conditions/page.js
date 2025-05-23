async function TermsAndConditions() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUT_URL}/pages/terms-&-conditions`,
    { cache: "no-store" }
  );
  const termsAndConditionsPage = await response.json();

  return (
    <main
      className="container mx-auto px-2 pt-16 xl:pt-6"
      dangerouslySetInnerHTML={{
        __html: termsAndConditionsPage?.content || "<p>No content found.</p>",
      }}
    />
  );
}

export default TermsAndConditions;
