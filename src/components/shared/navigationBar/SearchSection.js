import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SearchField = ({ toggleSearchDrawer }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [value, setValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const containerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_ROUT_URL}/shop/products`,
        {
          headers: {
            "X-Website-Origin": "true",
          },
        }
      );
      const data = await res.json();
      setAllProducts(data.products || []);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setValue(value);
    setIsDropdownOpen(true);

    if (value === "") {
      setFilterProduct([]);
    } else {
      setFilterProduct(
        allProducts.filter((product) =>
          product?.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  const getProductCategoryLink = (product) => {
    const categoryMap = {
      electronics: "/electronics",
      tshirts: "/t-shirts",
    };

    return (
      categoryMap[product.category?.toLowerCase()] || `/product/${product.id}`
    );
  };

  const handleSearchSubmit = () => {
    const categoryMap = {
      tshirt: "/t-shirts",
      electronics: "/electronics",
    };

    const categoryLink = categoryMap[value.toLowerCase()];
    if (categoryLink) {
      window.location.href = categoryLink; // Redirect to the category page
    } else {
      setIsDropdownOpen(true); // Keep the dropdown open to show product results
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative">
        <input
          ref={inputRef}
          type="search"
          className="w-full h-[50px] ps-6 pr-14 py-2 rounded-md border focus:border-primary outline-none shadow-sm transition-all duration-300"
          id="search"
          name="search"
          placeholder="I'm looking for ....."
          value={value}
          onChange={handleSearchChange}
          onFocus={() => setIsDropdownOpen(true)}
        />
        <button
          onClick={handleSearchSubmit}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5"
        >
          <Search size={22} strokeWidth={1.5} className="text-[#888AA0]" />
        </button>
      </div>

      {isDropdownOpen && (
        <ul className="bg-white absolute top-full left-0 w-full border border-gray-300 max-h-60 overflow-y-auto z-10 rounded-md shadow-lg mt-1">
          {filterProduct?.length > 0 ? (
            filterProduct.map((product) => (
              <Link
                key={product?.id}
                href={getProductCategoryLink(product)}
                legacyBehavior
              >
                <li
                  className="p-1 max-h-20 cursor-pointer border-b border-gray-200 hover:bg-cyan-50 text-black last:border-b-0"
                  onClick={() => {
                    setValue(product?.name);
                    setIsDropdownOpen(false);
                    toggleSearchDrawer && toggleSearchDrawer(false);
                  }}
                >
                  <div className="w-full p-2 flex items-center">
                    <div className="relative h-16 w-16 flex-shrink-0">
                      <Image
                        src={product?.image}
                        alt={product?.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-900">
                        {product?.name}
                      </p>
                      <div className="flex gap-4 items-center mt-1">
                        <span className="text-sm font-semibold text-emerald-900">
                          ৳{product?.currentPrice}
                        </span>
                        {product?.discount !== "0" && (
                          <del className="text-xs text-red-600 font-semibold">
                            ৳{product?.oldPrice}
                          </del>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              </Link>
            ))
          ) : value ? (
            <li className="p-4 text-gray-500">No results found</li>
          ) : null}
        </ul>
      )}
    </div>
  );
};

export default SearchField;
