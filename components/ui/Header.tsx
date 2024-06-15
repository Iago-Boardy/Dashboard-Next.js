'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { CommandDemo } from "../Command";
import { BellIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Header() {
  const [notifications, setNotifications] = useState<any>([
    {
      text: "This is a notification",
      date: "02-01-2024",
      read: false,
    },
    {
      text: "This is another notification",
      date: "02-01-2022",
      read: true,
    },
  ]);

  return (
    <div className="grid grid-cols-2 gap-4 p-4 border-b">
      <CommandDemo />
      <div className="flex items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="relative" variant="outline" size="icon">
            <span className={`absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 ${notifications.find((x: any) => x.read === true) ? "bg-green-500" : "bg-neutral-200"}`}></span>
              <BellIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {notifications.map((item: any, key: number) => (
              <DropdownMenuItem key={key} className="py-2 px-3 cursor-pointer bg-neutral-50 transition flex items-start gap-2">
              <div key={key} className="flex items-start gap-2 py-2 px-3 bg-neutral-50">
              <span className={`h-3 w-3 rounded-full my-1 ${item.read ? "bg-green-500" : "bg-neutral-200"}`}></span>
              <div className="flex-col">
                <p>{item.text}</p>
                <p className="text-xs text-neutral-500">{item.date}</p>
              </div>
            </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
