import { useState } from "react";
import { useAddress } from "@/components/contextApi/context/AddressContext";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash, X } from "lucide-react";

function CheckoutLocation({ data }) {
  const { addresses, deleteAddress } = useAddress();
  const [selectedAddress, setSelectedAddress] = useState(0);
  console.log(addresses);

  const handleSelectAddress = (index) => {
    setSelectedAddress(index === selectedAddress ? 0 : index);
  };

  return (
    <main className="space-y-4">
      <p>Please select a shipping address</p>
      {addresses.length > 0 ? (
        <>
          {addresses.map((address, ind) => (
            <section
              key={ind}
              className="relative bg-[#E5F7FF] p-4 sm:p-6 rounded-lg space-y-6"
            >
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id={`address-${ind}`}
                    className="w-4 h-4"
                    checked={ind === selectedAddress}
                    onCheckedChange={() => handleSelectAddress(ind)}
                  />
                  <label
                    htmlFor={`address-${ind}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    Select Location
                  </label>
                </div>

                {/* ACTION CONTAINER */}
                <div className="flex items-center gap-2">
                  <p>Edit</p>
                  <button className="text-red-500 hover:text-red-700 ml-4 hidden md:block">
                    <Trash size={20} onClick={() => deleteAddress(ind)} />
                  </button>
                  <button className="absolute top-1.5 right-1.5 md:relative text-red-500 hover:text-red-700 ml-4 block md:hidden">
                    <X size={20} onClick={() => deleteAddress(ind)} />
                  </button>
                </div>
              </div>
              {/* Customer Information */}
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Name: </span>
                  <span>{address?.name}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Phone: </span>
                  <span>{address?.phone}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Address: </span>
                  <span>
                    {address?.streetAddress}, {address?.union?.name},{" "}
                    {address?.upazila?.name}, {address?.district?.name},{" "}
                    {address?.division?.name} Bangladesh
                  </span>
                </p>
              </div>
            </section>
          ))}
        </>
      ) : (
        "No address found"
      )}
    </main>
  );
}

export default CheckoutLocation;
