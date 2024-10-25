"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CATEGORIES } from "@/lib/constants";
import * as Icons from "lucide-react";

interface SideNavProps extends React.HTMLAttributes<HTMLDivElement> {
  lang: string;
}

export function SideNav({ lang, className, ...props }: SideNavProps) {
  const pathname = usePathname();

  return (
    <div className={cn("pb-12", className)} {...props}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">
            {lang === 'ja' ? 'カテゴリー' : 'Categories'}
          </h2>
          <ScrollArea className="h-[calc(100vh-8rem)] px-2">
            <div className="space-y-1">
              {CATEGORIES.map((category) => {
                const Icon = Icons[category.icon as keyof typeof Icons];
                return (
                  <Button
                    key={category.id}
                    variant={pathname === `/${lang}/category/${category.id}` ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href={`/${lang}/category/${category.id}`}>
                      <Icon className="mr-2 h-4 w-4" />
                      {category.label[lang as keyof typeof category.label]}
                    </Link>
                  </Button>
                );
              })}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}