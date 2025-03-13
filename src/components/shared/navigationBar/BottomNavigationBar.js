"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
import Image from "next/image";

export function BottomNavigationBar({ categoriesData, navigationItems }) {
  const pathname = usePathname();

  return (
    <section className="border-y border-[#ebebeb] py-2 hidden xl:block">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* CATEGORIES SECTION */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="w-[300px] h-11 flex items-center justify-normal gap-4">
                  <AlignJustify size={22} strokeWidth={1.5} />
                  Categories
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="md:w-[300px] p-2">
                    {categoriesData.map((category, index) => (
                      <ListItem key={index} href={category.url}>
                        <Link
                          href={`category/${(category?.name).toLowerCase()}`}
                          className="flex items-center gap-2"
                        >
                          <Image
                            src={category?.logo}
                            width={400}
                            height={400}
                            className="w-6 h-6"
                            alt=""
                          />
                          {category.name}
                        </Link>
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* NAVIGATION MENU SECTION */}

          <NavigationMenu>
            <NavigationMenuList>
              {navigationItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.subItems ? (
                    <>
                      <NavigationMenuTrigger>
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.subItems.map((subItem, subIndex) => (
                            <ListItem
                              key={subIndex}
                              title={subItem.title}
                              href={subItem.href}
                              className={`${
                                pathname === subItem.href && "text-primary"
                              }`}
                            >
                              {subItem.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={`${
                          pathname === item.href && "text-primary"
                        } ${navigationMenuTriggerStyle()}`}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
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

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
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
  }
);
ListItem.displayName = "ListItem";
