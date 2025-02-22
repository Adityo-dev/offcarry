"use client";

import { useState, useEffect, useMemo } from "react";
import { Frown } from "lucide-react";
import { useSearchParams } from "next/navigation";
import DynamicFilter from "./DynamicFilter";
import ProductSection from "./ProductSection";

const DynamicProductDisplay = ({ params, products }) => {
  const initialMinPrice = products.length
    ? Math.min(...products.map((product) => product.currentPrice))
    : 0;
  const initialMaxPrice = products.length
    ? Math.max(...products.map((product) => product.currentPrice))
    : 0;

  const [minPrice, setMinPrice] = useState(initialMinPrice);
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice);
  const [sort, setSort] = useState("default");
  const [filterData, setFilterData] = useState({});
  const [checkedItems, setCheckedItems] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  // Fetch unique filter data dynamically
  const fetchFilterData = (products) => {
    const filterKeys = [
      ...new Set(
        products.flatMap((product) => product.filters.map((f) => f.filterName))
      ),
    ];

    const filterData = {};

    filterKeys.forEach((key) => {
      const uniqueValues = [
        ...new Set(
          products.flatMap((product) =>
            product.filters
              .filter((f) => f.filterName === key)
              .map((f) => f.value)
          )
        ),
      ];
      filterData[key] = uniqueValues.map((value) => ({
        id: value,
        label: value,
      }));
    });

    return filterData;
  };

  useEffect(() => {
    const loadData = () => {
      const data = fetchFilterData(products);
      setFilterData(data);

      const initialChecked = Object.keys(data).reduce((acc, key) => {
        acc[key] = [];
        return acc;
      }, {});
      setCheckedItems(initialChecked);
    };
    loadData();
  }, [products]);

  // Handle filter toggle
  const handleToggle = (category, value) => {
    const currentChecked = checkedItems[category] || [];
    const newChecked = currentChecked.includes(value)
      ? currentChecked.filter((item) => item !== value)
      : [...currentChecked, value];

    setCheckedItems({
      ...checkedItems,
      [category]: newChecked,
    });
  };

  // Handle pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    setSort(selectedSort);
  };

  // Filter products dynamically
  const filterProducts = useMemo(() => {
    return products.filter((product) => {
      const { currentPrice } = product;
      const isWithinPriceRange =
        currentPrice >= minPrice && currentPrice <= maxPrice;

      return (
        Object.entries(checkedItems).every(([key, values]) => {
          if (values.length === 0) return true;
          return product.filters.some(
            (f) =>
              f.filterName === key &&
              values.some(
                (value) => value.toLowerCase() === f.value.toLowerCase()
              )
          );
        }) && isWithinPriceRange
      );
    });
  }, [products, minPrice, maxPrice, checkedItems]);

  const searchFilteredData = products.filter((product) =>
    product?.name.toLowerCase().includes(search?.toLowerCase())
  );

  const sortProducts = (products, sort) => {
    if (sort === "asc") {
      return [...products].sort(
        (a, b) => Number(a.currentPrice) - Number(b.currentPrice)
      );
    }
    if (sort === "desc") {
      return [...products].sort(
        (a, b) => Number(b.currentPrice) - Number(a.currentPrice)
      );
    }
    return [...products];
  };

  const filteredProducts = search
    ? sortProducts(searchFilteredData, sort)
    : sortProducts(filterProducts, sort);

  // Paginate products
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      {products.length > 0 ? (
        <main className="container mx-auto px-4 xl:grid grid-cols-12 gap-5">
          <section className="w-full col-span-2 relative hidden xl:block">
            {filterData && (
              <DynamicFilter
                filterData={filterData}
                checkedItems={checkedItems}
                handleToggle={handleToggle}
                minPrice={minPrice}
                maxPrice={maxPrice}
                handleMinPriceChange={(e) =>
                  setMinPrice(Number(e.target.value))
                }
                handleMaxPriceChange={(e) =>
                  setMaxPrice(Number(e.target.value))
                }
              />
            )}
          </section>

          <ProductSection
            filterData={filterData}
            checkedItems={checkedItems}
            handleToggle={handleToggle}
            minPrice={minPrice}
            maxPrice={maxPrice}
            handleMinPriceChange={(e) => setMinPrice(Number(e.target.value))}
            handleMaxPriceChange={(e) => setMaxPrice(Number(e.target.value))}
            handleSortChange={handleSortChange}
            displayedProducts={displayedProducts}
            // Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        </main>
      ) : (
        <div className="flex flex-col h-[50vh] justify-center items-center text-custom-secondary">
          <span className="w-20 h-20 text-4xl text-custom-white bg-custom-primary flex items-center justify-center rounded-full p-5">
            <Frown className="w-10 h-10" />
          </span>
          <p className="mt-4 mb-2 font-medium"> Sorry! No Product Founds</p>
          <p>Please try searching for something else</p>
        </div>
      )}
    </>
  );
};

export default DynamicProductDisplay;
