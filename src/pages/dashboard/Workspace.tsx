import { useState } from "react";
import { Plus, Search, MoreVertical, Trash2, PenLine, ArrowUpRight, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

export default function WorkspacePage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [hasProjects, setHasProjects] = useState(true); // This would normally come from your backend

  const projects = [
    {
      name: "Project Alpha",
      status: "Completed",
      description: "AI-powered analytics platform",
      progress: 60,
      date: "22 Jan 2024",
    },
    {
      name: "Project Beta",
      status: "In Progress",
      description: "Customer dashboard redesign",
      progress: 72,
      date: "20 Jan 2024",
    },
    {
      name: "Project Gamma",
      status: "Fine Tuning",
      description: "Mobile app development",
      progress: 78,
      date: "24 Jan 2024",
    },
    {
      name: "Project Delta",
      status: "Testing",
      description: "E-commerce integration",
      progress: 38,
      date: "26 Jan 2024",
    },
    {
      name: "Project Epsilon",
      status: "Completed",
      description: "Marketing website",
      progress: 42,
      date: "18 Jan 2024",
    },
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      Completed: "bg-green-100 text-green-800",
      "In Progress": "bg-blue-100 text-blue-800",
      "Fine Tuning": "bg-yellow-100 text-yellow-800",
      Testing: "bg-purple-100 text-purple-800",
    };
    return colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  if (!hasProjects) {
    return (
      <div className="p-8 h-[calc(100vh-73px)] flex items-center justify-center">
        <div className="max-w-2xl w-full mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute inset-0"></div>
            
            <div className="relative z-10">
              <div className="mb-6 inline-block">
                <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-sm">
                  <Brain className="w-12 h-12" />
                </div>
              </div>
              
              <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard!</h1>
              <p className="text-lg text-blue-100 mb-8 max-w-lg mx-auto">
                Start your journey by creating your first fine-tuning project. Simply click the button below, and we'll guide you through the rest!
              </p>
              
              <Button 
                onClick={() => navigate("/dashboard/workspace/new")}
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-6 h-auto text-lg rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
              >
                <Plus className="w-5 h-5 mr-2" />
                Start New Project
              </Button>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      {/* Workspace header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold text-gray-900">Workspace</h1>
        <Button 
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 h-auto"
          onClick={() => navigate("/dashboard/workspace/new")}
        >
          <Plus className="h-5 w-5 mr-2" /> Start New Project
        </Button>
      </div>

      <div className="mb-8">
        {/* Analytics cards */}
        <div className="grid gap-4 mb-8 md:grid-cols-2 xl:grid-cols-2">
          <div className="p-6 bg-blue-50 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Analytics</h3>
              <Button variant="ghost" size="icon" className="h-8 w-8 bg-white rounded-full shadow-sm hover:bg-gray-50">
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">Project Name</h2>
            <div className="space-y-4">
              <p className="text-sm text-gray-500">Date Started: Jan 4, 2025</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Completed By: Jan 8, 2025</span>
                <span className="text-sm font-medium text-gray-900">75%</span>
              </div>
              <div className="w-full h-4 bg-white rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-400 to-blue-300 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-blue-50 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Analytics</h3>
              <Button variant="ghost" size="icon" className="h-8 w-8 bg-white rounded-full shadow-sm hover:bg-gray-50">
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">Project Name</h2>
            <div className="space-y-4">
              <p className="text-sm text-gray-500">Date Started: Jan 4, 2025</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Completed By: Jan 8, 2025</span>
                <span className="text-sm font-medium text-gray-900">75%</span>
              </div>
              <div className="w-full h-4 bg-white rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-400 to-blue-300 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects table */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-4 border-b">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 w-full"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">Projects ↓</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">About</th>
                  <th className="px-6 py-3">Progress</th>
                  <th className="px-6 py-3">Date Created</th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {projects
                  .filter((project) =>
                    project.name
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                  )
                  .map((project, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {project.name}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            project.status
                          )}`}
                        >
                          {project.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {project.description}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-500 h-2 rounded-full"
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">
                            {project.progress}%
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {project.date}
                      </td>
                      <td className="px-6 py-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <PenLine className="h-4 w-4 mr-2" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="flex items-center justify-between px-6 py-4 border-t">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <span className="text-sm text-gray-700">Page 1 of 5</span>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}