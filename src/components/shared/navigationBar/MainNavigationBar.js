import { AlignJustify, Gift, Heart, UserPlus } from "lucide-react";
import { BottomNavigationBar } from "./BottomNavigationBar";
import CenterNavigationBar from "./CenterNavigationBar";
import MobileNavigationBar from "./MobileNavigationBar";
import TopNavigationBar from "./TopNavigationBar";

// Center nav right section data
const centerNavRightData = [
  {
    icon: <Gift size={22} strokeWidth={1.3} />,
    name: "latest offers",
    title: "offer",
    url: "/offer",
  },
  {
    icon: <Heart size={22} strokeWidth={1.3} />,
    name: "my wishlist",
    title: "wishlist",
    url: "/wishlist",
  },
  {
    icon: <UserPlus size={22} strokeWidth={1.3} />,
    name: "my account",
    title: "login or register ",
    url: "/account/login",
  },
];

// Define the navigation items
const navigationItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Shop",
    href: "/shop",
  },
  {
    title: "Page",
    href: "#",
    subItems: [
      {
        title: "Deal Of The Day",
        href: "#",
        description:
          "Simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "Featured Products",
        href: "#",
        description:
          "Simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "Best Sellers",
        href: "#",
        description:
          "Simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "Trending",
        href: "#",
        description:
          "Simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "New",
        href: "#",
        description:
          "Simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "Winter",
        href: "#",
        description:
          "Simply dummy text of the printing and typesetting industry.",
      },
    ],
  },
  {
    title: "Special",
    href: "#",
    subItems: [
      {
        title: "Deal Of The Day",
        href: "#",
        description:
          "Simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "Featured Products",
        href: "#",
        description:
          "Simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "Best Sellers",
        href: "#",
        description:
          "Simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "Trending",
        href: "#",
        description:
          "Simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "New",
        href: "#",
        description:
          "Simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "Winter",
        href: "#",
        description:
          "Simply dummy text of the printing and typesetting industry.",
      },
    ],
  },
  {
    title: "Trending",
    href: "#",
    subItems: [
      {
        title: "Deal Of The Day",
        href: "#",
        description:
          "Simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "Featured Products",
        href: "#",
        description:
          "Simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "Best Sellers",
        href: "#",
        description:
          "Simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "Trending",
        href: "#",
        description:
          "Simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "New",
        href: "#",
        description:
          "Simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "Winter",
        href: "#",
        description:
          "Simply dummy text of the printing and typesetting industry.",
      },
    ],
  },
  {
    title: "New",
    href: "/docs",
  },
  {
    title: "Combo Offer",
    href: "/combo-offer",
  },
  {
    title: "Upcoming",
    href: "/upcoming",
  },
];

// Define the categories data
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

function MainNavigationBar() {
  return (
    <main className="xl:space-y-6">
      <TopNavigationBar />
      <CenterNavigationBar
        categoriesData={categoriesData}
        navigationItems={navigationItems}
        centerNavRightData={centerNavRightData}
      />
      <BottomNavigationBar
        categoriesData={categoriesData}
        navigationItems={navigationItems}
      />
      <MobileNavigationBar />
    </main>
  );
}

export default MainNavigationBar;
