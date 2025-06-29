
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Modules from "./pages/Modules";
import Lesson from "./pages/Lesson";
import CourseDetail from "./pages/CourseDetail";
import Challenges from "./pages/Challenges";
import Rating from "./pages/Rating";
import Achievements from "./pages/Achievements";
import Profile from "./pages/Profile";
import Access from "./pages/Access";
import ManageAccount from "./pages/ManageAccount";
import NotFound from "./pages/NotFound";
import AdminPanel from "@/pages/AdminPanel.tsx";
import AdminLogin from "@/pages/AdminLogin.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/lesson/:id" element={<Lesson />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/rating" element={<Rating />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/access" element={<Access />} />
            <Route path="/manage-account" element={<ManageAccount />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
