// TABS COMPONENTS
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MobileMenuAndCategory({ categoriesData, navigationItems }) {
  const pathname = usePathname();

  return (
    <section className="container mx-auto px-4">
      <Tabs defaultValue="smartphone" className="w-full">
        <TabsList className="w-full mb-6 space-x-4">
          <TabsTrigger
            value={"a"}
            className="w-full border py-2 data-[state=active]:bg-gradient-primary data-[state=active]:text-white rounded-sm"
          >
            Nav Bar List
          </TabsTrigger>
          <TabsTrigger
            value={"category"}
            className="w-full border py-2 data-[state=active]:bg-gradient-primary data-[state=active]:text-white rounded-sm"
          >
            Category
          </TabsTrigger>
        </TabsList>

        {/* TABS CONTAINER */}
        <TabsContent value={"a"} className="w-full">
          a
        </TabsContent>
        <TabsContent value={"category"} className="w-full space-y-6">
          {categoriesData.map((categories, ind) => (
            <div key={ind}>
              <Link
                href={`/category/${(categories?.name).toLowerCase()}`}
                className="flex items-center gap-2 md:gap-3"
              >
                <Image
                  src={categories?.logo}
                  width={400}
                  height={400}
                  alt={categories?.name}
                  className="w-5 sm:w-6 h-5 sm:h-6"
                />
                {categories.name}
              </Link>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </section>
  );
}

export default MobileMenuAndCategory;
