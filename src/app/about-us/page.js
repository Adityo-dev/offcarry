async function AboutUs() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUT_URL}/pages/about-us`,
    { cache: "no-store" }
  );
  const aboutUs = await response.json();

  return (
    <main
      className="container mx-auto px-2 pt-16 xl:pt-6"
      dangerouslySetInnerHTML={{
        __html: aboutUs?.content || "<p>No content found.</p>",
      }}
    />
  );
}

export default AboutUs;
