import { SITE_CONFIG } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2024 {SITE_CONFIG.name}. All rights reserved.
        </p>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          Built with Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}