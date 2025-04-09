async function Disclaimer() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUT_URL}/pages/disclaimer`,
    { cache: "no-store" }
  );
  const disclaimerPage = await response.json();

  return (
    <main
      className="container mx-auto px-2 pt-24 xl:pt-6"
      dangerouslySetInnerHTML={{
        __html: disclaimerPage?.content || "<p>No content found.</p>",
      }}
    />
  );
}

export default Disclaimer;
