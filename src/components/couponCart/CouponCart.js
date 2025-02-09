import Image from "next/image";

function CouponCart({ product }) {
  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg p-5 border z-10 border-gray-300 relative flex ">
      {/* LEFT SIDE INFO */}
      <div className="flex items-center w-2/3 p-4">
        {/* CART IMAGE */}
        <Image
          src={product?.image}
          alt="Coupon"
          width={400}
          height={400}
          className="w-16 h-16 rounded-md object-cover"
        />
        {/* CART TEXT */}
        <div className="ml-4">
          <h2 className="text-lg font-semibold">August Gift Voucher</h2>
          <p className="text-red-500 text-sm font-bold">10% Off</p>
          <div className="flex space-x-2 mt-2">
            <div className="text-center">
              <span className="text-sm font-bold">81</span>
              <span className="text-sm text-gray-500 block">DAY</span>
            </div>
            <div className="text-center">
              <span className="text-sm font-bold">20</span>
              <span className="text-sm text-gray-500 block">HRS</span>
            </div>
            <div className="text-center">
              <span className="text-sm font-bold">2</span>
              <span className="text-sm text-gray-500 block">MIN</span>
            </div>
            <div className="text-center">
              <span className="text-sm font-bold">2</span>
              <span className="text-sm text-gray-500 block">SEC</span>
            </div>
          </div>
        </div>
      </div>

      {/* MIDDLE CUT LINE EFFECT */}
      <div className="absolute -top-[1px] right-[149px] w-7 h-6 bg-white rounded-b-full border border-t-0 border-gray-300 z-20"></div>
      <div className="absolute -bottom-[1px] right-[149px] w-7 h-6 bg-white rounded-t-full border border-b-0 border-gray-300 z-20"></div>

      {/* RIGHT SIDE COUPON */}
      <div className="w-1/3 border-l border-dashed flex flex-col items-center justify-center p-4">
        <p className="text-green-600 text-xs font-bold">Coupon Active</p>
        <div className="border-dashed border-2 border-gray-400 px-4 py-2 rounded-md mt-2 text-sm font-semibold">
          AUGUST23
        </div>
      </div>
    </div>
  );
}

export default CouponCart;
