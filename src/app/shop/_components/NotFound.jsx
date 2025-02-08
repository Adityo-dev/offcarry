import { PackageSearch } from "lucide-react";

export default function NoProductsFound({
  message = "No products found",
  suggestion = "Try adjusting your search or filters to find what you're looking for.",
}) {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <PackageSearch className="mx-auto h-12 w-12 text-gray-400" />
        <h2 className="mt-2 text-lg font-medium text-gray-900">{message}</h2>
        <p className="mt-1 text-sm text-gray-500">{suggestion}</p>
      </div>
    </div>
  );
}
