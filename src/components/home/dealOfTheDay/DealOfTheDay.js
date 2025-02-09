//Deal Of The Day DATA

import CouponCart from "@/components/couponCart/CouponCart";

const dealOfTheDayData = [
  {
    image: "/images/products2.png",
    title: "August Gift Voucher",
    off: "10",
    hours: "20",
    coupon: "TRUST230",
  },
  {
    image: "/images/products2.png",
    title: "August Gift Voucher",
    off: "10",
    hours: "20",
    coupon: "TRUST230",
  },
  {
    image: "/images/products2.png",
    title: "August Gift Voucher",
    off: "10",
    hours: "20",
    coupon: "TRUST230",
  },
  {
    image: "/images/products2.png",
    title: "August Gift Voucher",
    off: "10",
    hours: "20",
    coupon: "TRUST230",
  },
  {
    image: "/images/products2.png",
    title: "August Gift Voucher",
    off: "10",
    hours: "20",
    coupon: "TRUST230",
  },
  {
    image: "/images/products2.png",
    title: "August Gift Voucher",
    off: "10",
    hours: "20",
    coupon: "TRUST230",
  },
];

function DealOfTheDay() {
  return (
    <main className="container mx-auto px-4 space-y-7">
      <h2 className="text-4xl">Deal Of The Day</h2>

      <div className="grid grid-cols-3 gap-7">
        {dealOfTheDayData.map((dealData, ind) => (
          <CouponCart key={ind} product={dealData} />
        ))}
      </div>
    </main>
  );
}

export default DealOfTheDay;
