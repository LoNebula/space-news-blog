"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Rocket, Youtube, Twitter, Github, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { SITE_CONFIG } from "@/lib/constants";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SideNav } from "@/components/side-nav";

export function SiteHeader({ lang }: { lang: string }) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="mr-2 px-2 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <SideNav lang={lang} className="px-2" />
          </SheetContent>
        </Sheet>
        
        <div className="flex items-center gap-2">
          <Link href={`/${lang}`} className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">
              {SITE_CONFIG.name}
            </span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2">
          <nav className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href={SITE_CONFIG.links.youtube} target="_blank">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href={SITE_CONFIG.links.twitter} target="_blank">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href={SITE_CONFIG.links.github} target="_blank">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageToggle currentLang={lang} />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}