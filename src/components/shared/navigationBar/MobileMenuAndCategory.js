// TABS COMPONENTS
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlignJustify } from "lucide-react";

// const Categories
const categoriesData = [
  {
    icon: <AlignJustify size={22} strokeWidth={1.5} />,
    name: "Phone",
    url: "#",
  },
  {
    icon: <AlignJustify size={22} strokeWidth={1.5} />,
    name: "Camera",
    url: "#",
  },
  {
    icon: <AlignJustify size={22} strokeWidth={1.5} />,
    name: "Pc",
    url: "#",
  },
  {
    icon: <AlignJustify size={22} strokeWidth={1.5} />,
    name: "Headphone",
    url: "#",
  },
  {
    icon: <AlignJustify size={22} strokeWidth={1.5} />,
    name: "Television",
    url: "#",
  },
  {
    icon: <AlignJustify size={22} strokeWidth={1.5} />,
    name: "Speakers",
    url: "#",
  },
  {
    icon: <AlignJustify size={22} strokeWidth={1.5} />,
    name: "Accessories",
    url: "#",
  },
];

function MobileMenuAndCategory() {
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
        <TabsContent value={"category"} className="w-full space-y-4">
          {categoriesData.map((categories, ind) => (
            <div key={ind} href={categories.url}>
              <span className="flex items-center gap-2">
                {categories?.icon}
                {categories.name}
              </span>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </section>
  );
}

export default MobileMenuAndCategory;
