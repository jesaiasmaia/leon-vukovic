import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { LogIn } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen w-full grid lg:grid-cols-2">
      {/* Login Form Section */}
      <div className="flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-blue-500 text-white p-2 rounded-lg">
              <LogIn className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold text-blue-500">Smarleeva</span>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
              <p className="text-sm text-gray-500">
                Enter your credentials to access your account
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
                  Email
                </label>
                <Input
                  id="email"
                  placeholder="m@example.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="password">
                  Password
                </label>
                <Input
                  id="password"
                  placeholder="••••••••"
                  type="password"
                  autoComplete="current-password"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-blue-500 hover:text-blue-600"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              size="lg"
            >
              Sign in
            </Button>

            <p className="text-sm text-center text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-blue-500 hover:text-blue-600"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Pattern Section */}
      <div className="hidden lg:block relative overflow-hidden bg-blue-50">
        <div className="absolute inset-0 pattern-grid opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20"></div>
        <div className="relative h-full flex items-center justify-center p-12">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg max-w-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Transform Your Data with AI</h2>
            <p className="text-gray-600">
              Unlock the power of machine learning with our intuitive platform. Fine-tune models, enhance performance, and deploy with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}