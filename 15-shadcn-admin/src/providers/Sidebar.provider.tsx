import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/atoms/sidebar";

export function AppSidebarProvider({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      {children}
    </SidebarProvider>
  );
}