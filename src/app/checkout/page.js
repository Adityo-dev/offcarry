"use client";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddressForm from "./_component/AddressForm";
import RelativeModal from "../../components/relativeModal/RelativeModal";
import ShoppingCart from "./_component/ShoppingCart";
import PaymentOptions from "./_component/PaymentOptions";
import CheckoutCard from "./_component/CheckoutCard";
import CheckoutLocation from "./_component/CheckoutLocation";

const CheckoutPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mx-auto px-4 pt-6">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-full xl:col-span-7">
          <div className="flex flex-col xl:flex-row justify-between items-center gap-4 rounded-xl ">
            <h1 className="text-2xl font-semibold flex items-center gap-2">
              Shipping Address
            </h1>
            <button
              onClick={toggleModal}
              className="inline-flex items-center text-[#837F74] font-medium border-b-2 p-2 gap-2"
            >
              {/* <AiOutlinePlus className="w-4 h-4 mr-2" /> */}
              <Plus className="text-[#07B7C5]" /> Add New Address
            </button>

            {isOpen && (
              <RelativeModal
                setShowForm={toggleModal}
                title={"Delivery Address: "}
              >
                <AddressForm setShowForm={toggleModal} />
              </RelativeModal>
            )}
          </div>
          <div className="mt-6 space-y-6">
            <CheckoutLocation />
            <ShoppingCart />
          </div>
        </div>
        <div className="col-span-full xl:col-span-5">
          <PaymentOptions />
          <CheckoutCard />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
