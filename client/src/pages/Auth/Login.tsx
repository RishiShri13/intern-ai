import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import axios from "axios";

import { useAuthStore } from "@/store/auth.store";
import { loginUser } from "@/services/auth";
import type { User } from "@/store/auth.store";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

export default function Login() {
  const navigate = useNavigate();

  const setAuth = useAuthStore((state) => state.setAuth);

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);

      const response = await loginUser(data);

      localStorage.setItem("token", response.token);

      const user: User = {
        id: response.user.id,
        name: response.user.name,
        email: response.user.email,
        role: "ADMIN", // Temporary until backend returns role
      };

      setAuth(user, response.token);

      navigate("/dashboard");

    } catch (error: unknown) {
      let message = "Login failed";

      if (axios.isAxiosError(error)) {
        message = error.response?.data?.message || message;
      }

      alert(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
      >
        <h1 className="text-3xl font-bold text-center">
          Login to <span className="text-cyan-400">InternAI</span>
        </h1>

        <p className="mt-2 text-center text-slate-400 text-sm">
          Manage internships with AI intelligence
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
          <div>
            <label className="text-sm text-slate-400">
              Email
            </label>

            <input
              {...register("email")}
              className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-cyan-400"
              placeholder="Enter email"
            />

            {errors.email && (
              <p className="text-red-400 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm text-slate-400">
              Password
            </label>

            <input
              type="password"
              {...register("password")}
              className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-cyan-400"
              placeholder="Enter password"
            />

            {errors.password && (
              <p className="text-red-400 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-cyan-500 py-3 font-semibold text-black hover:bg-cyan-400 transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}