"use client";
import { useState } from "react";
import ProductReviews from "./ProductReviews";

const tabs = [
  {
    name: "Description",
    content: `Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat.`,
  },
  {
    name: "Specification",
    content: `Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt.`,
  },
  {
    name: "Vendor Info",
    content: `elementum id enim. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat.`,
  },
  {
    name: "Reviews (2)",
    content: <ProductReviews />,
  },
];

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <div className="w-full mx-auto mt-16">
      {/* Tab Headers */}
      <div className="flex border rounded-lg border-gray-300 p-6">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-4 font-medium ${
              activeTab === tab.name ? "text-[#10B982]" : "text-[#837F74]"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-8 text-[#888AA0]">
        {tabs.find((tab) => tab.name === activeTab)?.content}
      </div>
    </div>
  );
}
