"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAddress } from "@/components/contextApi/context/AddressContext";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function AddressForm({ setShowForm = () => {} }) {
  const { addAddress } = useAddress();
  const [open, setOpen] = useState({
    division: false,
    district: false,
    upazila: false,
    union: false,
  });
  const [selected, setSelected] = useState({
    division: { id: "", name: "" },
    district: { id: "", name: "" },
    upazila: { id: "", name: "" },
    union: { id: "", name: "" },
  });
  const [data, setData] = useState({
    divisions: [],
    districts: [],
    upazilas: [],
    unions: [],
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", phone: "", streetAddress: "", email: "" },
  });

  useEffect(() => {
    const fetchData = async (url, setter) => {
      const response = await fetch(url);
      const json = await response.json();
      setter(json?.data);
    };

    fetchData("https://locator-api.declives.com/api/v1/divisions", (data) =>
      setData((prev) => ({ ...prev, divisions: data }))
    );
  }, []);

  useEffect(() => {
    if (selected.division.id) {
      fetch(
        `https://locator-api.declives.com/api/v1/districts/${selected?.division?.id}`
      )
        .then((res) => res.json())
        .then((data) =>
          setData((prev) => ({
            ...prev,
            districts: data?.data,
            upazilas: [],
            unions: [],
          }))
        );
    }
  }, [selected.division.id]);

  useEffect(() => {
    if (selected?.district?.id) {
      fetch(
        `https://locator-api.declives.com/api/v1/upazilas/${selected?.district?.id}`
      )
        .then((res) => res.json())
        .then((data) =>
          setData((prev) => ({ ...prev, upazilas: data?.data, unions: [] }))
        );
    }
  }, [selected.district.id]);

  useEffect(() => {
    if (selected?.upazila?.id) {
      fetch(
        `https://locator-api.declives.com/api/v1/unions/${selected?.upazila?.id}`
      )
        .then((res) => res.json())
        .then((data) => setData((prev) => ({ ...prev, unions: data?.data })));
    }
  }, [selected?.upazila?.id]);

  const onSubmit = (formData) => {
    const addressData = { ...formData, ...selected };
    addAddress(addressData);
    setShowForm();
  };

  const renderSelector = (type, label, disabledCondition) => (
    <Popover
      open={open[type]}
      onOpenChange={(open) => setOpen((prev) => ({ ...prev, [type]: open }))}
    >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open[type]}
          disabled={disabledCondition}
          className="mt-2 h-12 p-4 w-full border border-gray-300 bg-white text-[#ACB5BD] rounded-lg placeholder:text-[#ACB5BD] text-sm outline-none transition-all duration-300 focus:border-primary"
        >
          {selected[type].name || `Select ${type}`}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder={`Search ${type}s`} />
          <CommandList>
            <CommandEmpty>No {type}s found.</CommandEmpty>
            <CommandGroup>
              {data[`${type}s`].map((item) => (
                <CommandItem
                  key={item.id}
                  value={item.name}
                  onSelect={() => {
                    setSelected((prev) => ({
                      ...prev,
                      [type]: { id: item.id, name: item.name },
                    }));
                    setOpen((prev) => ({ ...prev, [type]: false }));
                  }}
                >
                  {item.name}
                  <Check
                    className={cn(
                      "ml-auto",
                      selected[type].id === item.id
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 text-left rounded-md min-w-[30rem] xs:min-w-full dark:text-gray-400"
    >
      <div className="grid grid-cols-2 gap-5">
        {["name", "phone"].map((field) => (
          <div key={field}>
            <label
              htmlFor={field}
              className="block text-sm font-semibold text-[#38311F]"
            >
              {field.charAt(0).toUpperCase() + field.slice(1)}{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              id={field}
              type="text"
              placeholder={`Enter your ${field}`}
              {...register(field, {
                required: `${
                  field.charAt(0).toUpperCase() + field.slice(1)
                } is required`,
              })}
              className="mt-2 h-12 p-4 w-full border border-gray-300 bg-white text-[#ACB5BD] rounded-lg placeholder:text-[#ACB5BD] text-sm outline-none transition-all duration-300 focus:border-primary"
            />
            {errors[field] && (
              <span className="text-red-500">{errors[field].message}</span>
            )}
          </div>
        ))}
        {renderSelector("division", "Division", false)}
        {renderSelector("district", "District", !selected.division.id)}
        {renderSelector("upazila", "Upazila", !selected.district.id)}
        {renderSelector("union", "Union", !selected.upazila.id)}
        <div className="col-span-2">
          <label
            htmlFor="streetAddress"
            className="block text-sm font-semibold text-[#38311F]"
          >
            Street Address <span className="text-red-500">*</span>
          </label>
          <textarea
            id="streetAddress"
            rows="4"
            placeholder="Your Street Address"
            {...register("streetAddress", {
              required: "Street Address is required",
            })}
            className="mt-2 h-auto p-4 w-full border border-gray-300 bg-white text-[#ACB5BD] rounded-lg placeholder:text-[#ACB5BD] text-sm outline-none transition-all duration-300 focus:border-primary"
          />
          {errors.streetAddress && (
            <span className="text-red-500">{errors.streetAddress.message}</span>
          )}
        </div>
        <div className="col-span-full">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-[#38311F]"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            {...register("email", { required: "Email is required" })}
            className="mt-2 h-12 p-4 w-full border border-gray-300 bg-white text-[#ACB5BD] rounded-lg placeholder:text-[#ACB5BD] text-sm outline-none transition-all duration-300 focus:border-primary"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="h-12 px-16 text-[#F8F9FA] font-semibold rounded-md bg-gradient-primary outline-none transition-all duration-300 text-center"
        >
          Save Location
        </button>
      </div>
    </form>
  );
}
