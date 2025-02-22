import SectionHeader from "@/components/sectionHeader/SectionHeader";
import OfferCart from "./OfferCart";
// OFFER DATA
const offerData = [
  {
    image: "/images/offer4.jpg",
    title: "Bundle Offer",
    subtitle: "Buy Together, Save More!",
  },
  {
    image: "/images/offer3.jpg",
    title: "Bundle Offer",
    subtitle: "Buy Together, Save More!",
  },
  {
    image: "/images/offer.jpg",
    title: "Bundle Offer",
    subtitle: "Buy Together, Save More!",
  },
  {
    image: "/images/offer1.jpg",
    title: "Bundle Offer",
    subtitle: "Buy Together, Save More!",
  },
  {
    image: "/images/offer2.jpg",
    title: "Bundle Offer",
    subtitle: "Buy Together, Save More!",
  },
  {
    image: "/images/offer1.jpg",
    title: "Bundle Offer",
    subtitle: "Buy Together, Save More!",
  },
  {
    image: "/images/offer4.jpg",
    title: "Bundle Offer",
    subtitle: "Buy Together, Save More!",
  },
];

function Offer() {
  return (
    <main className="space-y-6 pt-16 xl:pt-0">
      <SectionHeader title={"Off"} linkName={"Offer"} />
      <section className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {offerData.map((offer, ind) => (
          <div key={ind}>
            <OfferCart offer={offer} />
          </div>
        ))}
      </section>
    </main>
  );
}

export default Offer;
