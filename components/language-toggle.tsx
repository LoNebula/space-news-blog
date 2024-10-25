"use client";

import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageToggle({ currentLang }: { currentLang: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-5 w-5" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href="/en" className={currentLang === 'en' ? 'font-bold' : ''}>
            English
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/ja" className={currentLang === 'ja' ? 'font-bold' : ''}>
            日本語
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}