// TABS COMPONENTS
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MobileMenuAndCategory({
  categoriesData,
  navigationItems,
  SheetClose,
}) {
  const pathname = usePathname();

  return (
    <section className="w-full h-full">
      <Tabs defaultValue="smartphone" className="w-full">
        <TabsList className="w-full h-12 bg-[#152327] grid grid-cols-12">
          <TabsTrigger
            value={"menu"}
            className="col-span-3 w-full border-b-2 border-[#152327] data-[state=active]:border-b-2 data-[state=active]:border-red-500 data-[state=active]:text-white "
          >
            <AlignJustify size={22} strokeWidth={1.5} />
          </TabsTrigger>

          <TabsTrigger
            value={"category"}
            className="col-span-7 w-full border-b-2 border-[#152327] data-[state=active]:border-b-2 data-[state=active]:border-red-500 data-[state=active]:text-white "
          >
            Category
          </TabsTrigger>
          <SheetClose asChild>
            <button
              className="col-span-2 w-full flex items-center justify-center
            border-s"
            >
              <X className="h-6 w-6" />
            </button>
          </SheetClose>
        </TabsList>

        {/* TABS CONTAINER */}
        <TabsContent value={"menu"} className="w-full flex flex-col gap-4 px-4">
          {navigationItems.map((navbar, ind) => (
            <SheetClose asChild key={ind}>
              <Link href={navbar?.href}>{navbar?.title}</Link>
            </SheetClose>
          ))}
        </TabsContent>
        <TabsContent value={"category"} className="w-full space-y-6 px-4">
          {categoriesData.map((categories, ind) => (
            <SheetClose asChild key={ind}>
              <Link
                href={`/category/${(categories?.name).toLowerCase()}`}
                className="flex items-center gap-2 md:gap-3"
              >
                <Image
                  src={categories?.logo}
                  width={400}
                  height={400}
                  alt={`${categories?.name} - ${categories?.description}`}
                  className="w-5 sm:w-6 h-5 sm:h-6"
                />
                {categories.name}
              </Link>
            </SheetClose>
          ))}
        </TabsContent>
      </Tabs>
    </section>
  );
}

export default MobileMenuAndCategory;
