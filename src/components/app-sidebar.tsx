import {
  Calendar,
  ChevronUp,
  Cog,
  Dribbble,
  Home,
  Search,
  Settings,
  User,
  User2,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "About",
    url: "#about",
    icon: User,
  },
  {
    title: "Projects",
    url: "#projects",
    icon: Cog,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Socials",
    url: "#",
    icon: Dribbble,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className=" border-b">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="p-2 text-lg font-semibold flex items-center gap-2">
                  {/* Logo on the left */}
                  <img
                    src="/logo.png" // replace with your logo path
                    alt="Logo"
                    className="h-6 w-6"
                  />
                  <span>pbhtt</span>
                </div>
              </DropdownMenuTrigger>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center gap-3 text-[15px] font-medium"
                    >
                      <item.icon className="h-5 w-5" />{" "}
                      {/* Increased icon size */}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="cursor-pointer text-[15px] font-medium">
                  <User2 className="h-5 w-5" /> 
                  Username
                  <ChevronUp className="ml-auto h-4 w-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width] flex flex-col gap-2 my-2"
              >
                <DropdownMenuItem>
                  <span className="cursor-pointer p-2">Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="cursor-pointer p-2">Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="cursor-pointer p-2">Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

    </Sidebar>
  );
}
