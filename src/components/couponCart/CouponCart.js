import { Info } from "lucide-react";
import Image from "next/image";

function CouponCart({ product }) {
  return (
    <div className="w-full grid grid-cols-12 bg-white p-2 border rounded-lg z-10 border-gray-300 relative">
      {/* LEFT SIDE INFO */}
      <div className="flex items-center col-span-8 sm:p-4">
        {/* CART IMAGE */}
        <div className="border w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden">
          <Image
            src={product?.image}
            alt="Coupon"
            width={400}
            height={400}
            className="w-full h-full rounded-md object-contain"
          />
        </div>
        {/* CART TEXT */}
        <div className="ml-2 sm:ml-4">
          <h2 className="text-sm font-semibold">August Gift Voucher</h2>
          <p className="font-semibold mt-1 mb-2 sm:mb-3 text-sm">
            <span className="text-red-500">{product?.off}%</span>
            <span> Off</span>
          </p>
          <div className="flex space-x-2 sm:space-x-4">
            <div className="text-center">
              <span className="text-xs sm:text-sm font-semibold">81</span>
              <span className="text-[10px] sm:text-xs text-gray-500 block">
                DAY
              </span>
            </div>
            <div className="text-center">
              <span className="text-xs sm:text-sm font-semibold">20</span>
              <span className="text-[10px] sm:text-xs text-gray-500 block">
                HRS
              </span>
            </div>
            <div className="text-center">
              <span className="text-xs sm:text-sm font-semibold">2</span>
              <span className="text-[10px] sm:text-xs text-gray-500 block">
                MIN
              </span>
            </div>
            <div className="text-center">
              <span className="text-xs sm:text-sm font-semibold">2</span>
              <span className="text-[10px] sm:text-xs text-gray-500 block">
                SEC
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* MIDDLE CUT LINE EFFECT */}
      <div className="absolute  -top-[1px]  right-[calc(33.33%-9px)] w-6 sm:w-7 h-5 sm:h-6 bg-white rounded-b-full border border-t-0 border-gray-300 z-20"></div>
      <div className="absolute -bottom-[1px] right-[calc(33.33%-9px)] w-6 sm:w-7 h-5 sm:h-6 bg-white rounded-t-full border border-b-0 border-gray-300 z-20"></div>

      {/* RIGHT SIDE COUPON */}
      <div className="col-span-4 border-l border-dashed flex flex-col items-center justify-center">
        <div className="flex items-center gap-1 sm:gap-2">
          <p className="text-[10px] sm:text-xs font-semibold">
            Coupon
            {product?.active ? (
              <span className="text-primary"> Active</span>
            ) : (
              <span className="text-red-500"> Inactive</span>
            )}
          </p>
          <p>
            <Info
              size={14}
              strokeWidth={1.5}
              color="gray"
              className="cursor-pointer"
            />
          </p>
        </div>
        <div className="border-dashed border border-primary bg-[#E5F2F2] px-4 sm:px-6 py-2 rounded-md mt-2 text-[10px] sm:text-sm font-semibold">
          {product?.coupon}
        </div>
      </div>
    </div>
  );
}

export default CouponCart;
