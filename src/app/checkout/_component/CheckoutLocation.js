import { Checkbox } from "@/components/ui/checkbox";
import { Trash, X } from "lucide-react";

function CheckoutLocation({ data }) {
  return (
    <main>
      <div className="relative bg-[#E5F7FF] p-4 sm:p-6 rounded-lg space-y-6">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Checkbox id="terms" className="w-4 h-4" />
            <label
              htmlFor="terms"
              className="text-sm font-medium  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              Select Location
            </label>
          </div>

          {/* ACTION CONTAINER */}
          <div className="flex items-center gap-2">
            <p>Edit</p>
            <button className="text-red-500 hover:text-red-700 ml-4 hidden md:block">
              <Trash size={20} />
            </button>
            <button className="absolute top-1.5 right-1.5 md:relative text-red-500 hover:text-red-700 ml-4 block md:hidden">
              <X size={20} />
            </button>
          </div>
        </div>
        {/* Customer Information */}
        <div className="space-y-2">
          <p className="flex items-center gap-2">
            <span className="font-semibold">Name: </span>
            <span>Aditto Dev Barmon (Koushik)</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="font-semibold">Phone: </span>
            <span>01770365981</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="font-semibold">Address: </span>
            <span>Nai</span>
          </p>
        </div>
      </div>
    </main>
  );
}

export default CheckoutLocation;
