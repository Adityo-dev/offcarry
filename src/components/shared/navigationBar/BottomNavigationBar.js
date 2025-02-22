"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { AlignJustify } from "lucide-react";

const components = [
  {
    title: "Deal Of The Day",
    href: "#",
    description: " Simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Featured Products",
    href: "#",
    description: "Simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Best Sellers",
    href: "#",
    description: "Simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Trending",
    href: "#",
    description: "Simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "New",
    href: "#",
    description: "Simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Winter",
    href: "#",
    description: "Simply dummy text of the printing and typesetting industry.",
  },
];

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

export function BottomNavigationBar() {
  return (
    <section className="border-y border-[#ebebeb] py-2 hidden xl:block">
      <div className=" container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* CATEGORIES SECTION  */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="w-[320px] h-11 flex items-center justify-normal gap-4 ">
                  <AlignJustify size={22} strokeWidth={1.5} />
                  Categories
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="md:w-[320px] p-2">
                    {categoriesData.map((categories, ind) => (
                      <ListItem key={ind} href={categories.url}>
                        <span className="flex items-center gap-2">
                          {categories?.icon}
                          {categories.name}
                        </span>
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* NAVIGATION MENU SECTION*/}
          <div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/shop" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Shop
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Page</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Special</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Trending</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      New
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* PRE ORDER SECTION */}
        <Link
          href={"/pre-order"}
          className="max-w-[130px] w-full h-11 flex items-center justify-center rounded-md text-lg font-medium bg-gradient-primary text-white"
        >
          Pre Order
        </Link>
      </div>
    </section>
  );
}

const ListItem = ({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";
