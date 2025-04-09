import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export function ProductSuggestion({ product }) {
  return (
    <div className="flex-shrink-0 w-48 border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-32 w-full bg-gray-100">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-3">
        <h3 className="font-medium text-sm line-clamp-1">{product.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold text-violet-600">${product.price}</span>
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
