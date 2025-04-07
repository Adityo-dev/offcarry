async function TermsAndConditions() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUT_URL}/pages/terms-&-conditions`,
    { cache: "no-store" }
  );
  const termsAndConditionsPage = await response.json();

  return (
    <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-gray-50 shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center capitalize">
          {termsAndConditionsPage?.title.replace(/-/g, " ")}
        </h1>

        <article
          className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-700"
          dangerouslySetInnerHTML={{
            __html:
              termsAndConditionsPage?.content || "<p>No content found.</p>",
          }}
        />
      </div>
    </main>
  );
}

export default TermsAndConditions;
