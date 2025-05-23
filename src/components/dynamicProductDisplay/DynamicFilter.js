"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DynamicFilter = ({
  filterData = {},
  checkedItems,
  handleToggle,
  minPrice,
  maxPrice,
  handleMinPriceChange,
  handleMaxPriceChange,
}) => {
  return (
    <section className="w-full">
      <div className="space-y-2 p-4 border border-custom-border rounded-lg">
        <p className="text-lg font-medium">Price Range</p>
        <div className="flex items-center space-x-4">
          <div className="space-y-1">
            <label>Min Price</label>
            <Input
              type="text"
              value={minPrice}
              onChange={handleMinPriceChange}
              className="w-full"
            />
          </div>
          <div className="space-y-1">
            <label>Max Price</label>
            <Input
              type="text"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {Object.entries(filterData).map(([key, values], ind) => (
        <Accordion
          key={ind}
          type="multiple"
          collapsible="true"
          defaultValue={[ind + 1]}
          className="w-full mt-4 flex flex-col"
        >
          <AccordionItem
            className="border border-custom-border px-4 rounded-lg"
            value={ind + 1}
          >
            <AccordionTrigger className="font-semibold ">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </AccordionTrigger>
            <div className="w-full max-h-80 overflow-auto">
              {values.map((item) => (
                <AccordionContent
                  className=" flex items-center space-x-3"
                  key={item.id}
                >
                  <Checkbox
                    id={item.id}
                    className=" w-4 h-4"
                    checked={checkedItems[key]?.includes(item.id) || false}
                    onCheckedChange={() => handleToggle(key, item.id)}
                  />
                  <label
                    htmlFor={item.id}
                    className="w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-nowrap capitalize cursor-pointer"
                  >
                    {item.label}
                  </label>
                </AccordionContent>
              ))}
            </div>
          </AccordionItem>
        </Accordion>
      ))}
    </section>
  );
};

export default DynamicFilter;
