import { Outlet, createFileRoute } from "@tanstack/react-router";
import { SidebarProvider, SidebarInset } from "@/components/shadcnui/sidebar";
import { AppSidebar } from "@/components/dashboard/SidebarMain";
import { Header } from "@/components/dashboard/Header";
import { Footer } from "@/components/dashboard/Footer";

export const Route = createFileRoute("/dashboard")({
  component: LayoutDashboard,
});

function LayoutDashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <main className="flex flex-1 flex-col">
          <Outlet />
        </main>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
}
