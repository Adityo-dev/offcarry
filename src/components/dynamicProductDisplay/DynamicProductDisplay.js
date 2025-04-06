"use client";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import DynamicFilter from "./DynamicFilter";
import ProductSection from "./ProductSection";

const DynamicProductDisplay = ({ products }) => {
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
              .flatMap((f) => (Array.isArray(f.value) ? f.value : [f.value]))
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

          return product.filters.some((f) => {
            if (f.filterName === key) {
              const filterValues = Array.isArray(f.value) ? f.value : [f.value];
              return filterValues.some((value) =>
                values.some(
                  (checkedValue) =>
                    checkedValue.toLowerCase() === value.toLowerCase()
                )
              );
            }
            return false;
          });
        }) && isWithinPriceRange
      );
    });
  }, [products, minPrice, maxPrice, checkedItems]);

  const handleResetFilters = () => {
    const resetChecked = Object.keys(filterData).reduce((acc, key) => {
      acc[key] = [];
      return acc;
    }, {});
    setCheckedItems(resetChecked);
    setMinPrice(initialMinPrice);
    setMaxPrice(initialMaxPrice);
  };

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
    <main className="container mx-auto px-2 flex gap-5">
      <section className="max-w-[250px] relative hidden xl:block">
        {filterData && (
          <DynamicFilter
            filterData={filterData}
            checkedItems={checkedItems}
            handleToggle={handleToggle}
            minPrice={minPrice}
            maxPrice={maxPrice}
            handleMinPriceChange={(e) => setMinPrice(Number(e.target.value))}
            handleMaxPriceChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        )}
      </section>

      <section className="w-full">
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
          handleResetFilters={handleResetFilters}
        />
      </section>
    </main>
  );
};

export default DynamicProductDisplay;
