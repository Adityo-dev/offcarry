import Image from "next/image";
import Link from "next/link";

function OfferCart({ offer }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image Section */}
      <Link
        href={`/offer/${offer?.title}`}
        className="w-full h-full bg-gray-200 flex items-center justify-center"
      >
        <Image
          src={offer.image}
          alt={offer.title}
          width={400}
          height={400}
          className="w-full h-[350px] object-cover"
        />
      </Link>

      {/* Content Section */}
      <div className="p-4">
        <Link href={`/offer/${offer?.title}`}>
          <h3 className="text-lg sm:text-xl font-semibold text-secondary hover:text-primary transition-all duration-300">
            {offer.title}
          </h3>
        </Link>
        <p className="text-sm sm:text-base text-gray-600 mt-2">
          {offer.subtitle}
        </p>
        <Link
          href={`/offer/${offer?.title}`}
          className="w-full h-10 sm:h-11 flex items-center justify-center rounded-md text-sm sm:text-base font-medium bg-gradient-primary text-white mt-3"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default OfferCart;
