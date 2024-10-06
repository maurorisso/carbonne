import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Settings } from "lucide-react";
import Link from "next/link";
import React from "react";
import { type CreateItem } from "@/types";
import { Lollipop, FileText, Users, Briefcase } from "lucide-react";

const Sidebar = () => {
  const items: CreateItem[] = [
    {
      title: "Carbonne",
      href: "/dashboard",
      icon: <Lollipop className=" h-6 w-6" strokeWidth={2} />,
      description: "Home",
    },
    {
      title: "Projects",
      description: "Start a new consulting project",
      icon: <Briefcase className="h-6 w-6" strokeWidth={2} />,
      href: "/dashboard/projects",
    },
    {
      title: "Clients",
      description: "Add a new client to your portfolio",
      icon: <Users className="h-6 w-6" strokeWidth={2} />,
      href: "/dashboard/clients",
    },

    {
      title: "Forms",
      description: "Create a custom form for your clients",
      icon: <FileText className="h-6 w-6" strokeWidth={2} />,
      href: "/dasboard/forms",
    },
  ];
  return (
    <TooltipProvider>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 w-full px-2 sm:py-4">
          {items.map((item) => (
            <Tooltip key={item.title}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className="flex  items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  {item.icon}
                  <span className="sr-only">{item.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{item.title}</TooltipContent>
            </Tooltip>
          ))}
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
    </TooltipProvider>
  );
};

export default Sidebar;
