import { Search } from "lucide-react";

function SearchSection() {
  return (
    <div className="w-full h-[50px] relative text-black">
      <input
        type="search"
        id="search"
        name="search"
        placeholder="I’m looking for ....."
        className="w-full h-full ps-6 pr-14 py-2 rounded-md border focus:border-primary outline-none shadow-sm transition-all duration-300"
      />
      <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5">
        <Search size={22} strokeWidth={1.5} color="#888AA0" />
      </button>
    </div>
  );
}

export default SearchSection;
