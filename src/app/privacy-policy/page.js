async function PrivacyPolicy() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUT_URL}/pages/privacy-policy`,
    { cache: "no-store" }
  );
  const privacyPolicyPage = await response.json();

  return (
    <main
      className="container mx-auto px-2 pt-16 xl:pt-6"
      dangerouslySetInnerHTML={{
        __html: privacyPolicyPage?.content || "<p>No content found.</p>",
      }}
    />
  );
}

export default PrivacyPolicy;
