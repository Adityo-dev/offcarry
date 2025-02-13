import Image from "next/image";
// import icon
import { Heart, Search, UserPlus } from "lucide-react";
import Link from "next/link";
// center nav right section data
const centerNavRightData = [
  { icon: <Heart size={22} strokeWidth={1} />, url: "/wishlist" },
  {
    icon: <UserPlus size={22} strokeWidth={1} />,
    url: "/account/login",
    title: "Login or Register ",
    name: "My Account",
  },
];

function CenterNavigationBar() {
  return (
    <section className="container mx-auto px-4 flex justify-between py-4 xl:py-0">
      {/* TRUST NEST STORE LOGO */}
      <Link href={"/"}>
        <Image
          src="/logo/trustNestStore.png"
          width={160}
          height={160}
          alt="TrustNest Store Logo"
          className="w-28 sm:w-[160px]"
        />
      </Link>
      {/* SEARCH FIELD SECTION*/}
      <div className="max-w-[500px] w-full h-[50px] relative  hidden xl:block">
        <input
          type="search"
          id="search"
          name="search"
          placeholder="I’m looking for ....."
          className="w-full h-full ps-6 pr-14 py-2 rounded-md border outline-none shadow-sm"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5">
          <Search size={22} strokeWidth={1.5} color="#888AA0" />
        </button>
      </div>
      {/* WISHLIST AND ACCOUNT SECTION */}
      <div className="flex items-center gap-2 xl:gap-0">
        {centerNavRightData.map((data, ind) => (
          <Link href={data?.url} key={ind} className="flex items-center gap-4">
            <p className="w-8 xl:w-10 h-8 xl:h-10 p-1.5 xl:p-0 bg-[#EEF0F2] text-[#292B49] rounded-full flex items-center justify-center">
              {data?.icon}
            </p>
            <p className="hidden xl:flex flex-col text-sm text-[#837F74] ">
              <span>{data?.title}</span>
              <span>{data?.name}</span>
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CenterNavigationBar;
