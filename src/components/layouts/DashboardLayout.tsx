import { Outlet } from 'react-router-dom';
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DashboardLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-[2000px] mx-auto px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-gray-500">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>MB</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">Mas Bro!</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}