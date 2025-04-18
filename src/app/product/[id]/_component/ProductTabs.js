"use client";
import { useState } from "react";
import ProductReviews from "./ProductReviews";

export default function ProductTabs({ review, productId, product }) {
  const tabs = [
    {
      name: "Description",
      content: product?.description,
    },
    {
      name: "Specification",
      content: product.specification,
    },
    {
      name: `Reviews (${review?.length})`,
      content: (
        <ProductReviews initialReviewData={review} productId={productId} />
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].name);
  console.log(activeTab);

  return (
    <div className="w-full mx-auto mt-16">
      {/* Tab Headers */}
      <div className="flex gap-6 justify-center sm:justify-start border rounded-lg text-sm sm:text-base border-gray-300 p-4 sm:p-6">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={` font-medium ${
              activeTab === tab.name ? "text-[#10B982]" : "text-[#837F74]"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {/* add typography */}

      {activeTab !== `Reviews (${review?.length})` ? (
        <div
          className="prose mt-4 sm:mt-8 text-[#888AA0] text-sm sm:text-base leading-6"
          dangerouslySetInnerHTML={{
            __html: tabs.find((tab) => tab.name === activeTab)?.content,
          }}
        ></div>
      ) : <div>
        {tabs.find((tab) => tab.name === activeTab)?.content}
        </div>}
    </div>
  );
}
