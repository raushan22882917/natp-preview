
import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard, Users, FileText, MessageSquare, LogOut,
  Bookmark, Settings, PlusCircle
} from "lucide-react";
import { toast } from "sonner";

type AdminLayoutProps = {
  children: ReactNode;
  title: string;
};

export const AdminLayout = ({ children, title }: AdminLayoutProps) => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("adminLoggedIn") === "true");

  if (!isAdmin) {
    navigate("/admin-login");
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin-login");
    toast.info("Logged out successfully");
  };

  const menuItems = [
    { title: "Dashboard", icon: LayoutDashboard, path: "/admin" },
    { title: "Trademarks", icon: Bookmark, path: "/admin?tab=trademarks" },
    { title: "Applications", icon: FileText, path: "/admin?tab=applications" },
    { title: "Contacts", icon: MessageSquare, path: "/admin?tab=contacts" },
    { title: "Articles", icon: FileText, path: "/admin?tab=articles" },
    { title: "Admins", icon: Users, path: "/admin?tab=admins" },
  ];

  return (
    <SidebarProvider>
      <div className="h-screen w-full flex bg-gray-100">
        <Sidebar className="border-r border-gray-200 bg-[rgb(0,94,162)] text-white">
          <SidebarHeader className="p-4 border-b border-[rgba(255,255,255,0.1)]">
            <div className="flex items-center justify-center">
              <img
                src="/images/Logo.png"
                alt="Logo"
                className="h-14 max-w-full object-contain drop-shadow-md"
              />
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-white/70 font-semibold px-4 mt-6 mb-3 uppercase text-xs tracking-wider">
                Main
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <button
                          onClick={() => navigate(item.path)}
                          className="flex items-center gap-3 text-white hover:bg-[rgba(255,255,255,0.1)] px-4 py-3 w-full rounded-md transition-colors"
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.title}</span>
                        </button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel className="text-white/70 font-semibold px-4 mt-8 mb-3 uppercase text-xs tracking-wider">
                Actions
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <button
                        onClick={() => navigate("/admin/create")}
                        className="flex items-center gap-3 text-white hover:bg-[rgba(255,255,255,0.1)] px-4 py-3 w-full rounded-md transition-colors"
                      >
                        <PlusCircle className="w-5 h-5" />
                        <span className="font-medium">Create New</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <button
                        onClick={() => navigate("/admin/settings")}
                        className="flex items-center gap-3 text-white hover:bg-[rgba(255,255,255,0.1)] px-4 py-3 w-full rounded-md transition-colors"
                      >
                        <Settings className="w-5 h-5" />
                        <span className="font-medium">Settings</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-[rgba(255,255,255,0.1)] p-6 mt-auto">
            <Button
              variant="ghost"
              className="w-full justify-start text-white hover:text-white hover:bg-[rgba(255,255,255,0.1)] transition-colors"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="text-[rgb(0,94,162)]" />
              <h1 className="text-2xl font-bold text-[rgb(0,94,162)]">{title}</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="border-[rgb(0,94,162)] text-[rgb(0,94,162)] hover:bg-[rgb(0,94,162)] hover:text-white transition-colors"
                onClick={() => navigate("/")}
              >
                View Website
              </Button>
            </div>
          </header>

          <main className="flex-1 overflow-auto p-6 bg-gray-50">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};
