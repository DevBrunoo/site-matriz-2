import { useState } from "react";
import { useLocation } from "wouter";
import { Lock, Eye, EyeOff } from "lucide-react";
import { login } from "@/lib/adminAuth";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [, setLocation] = useLocation();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (login(password)) {
      setLocation("/admin/dashboard");
    } else {
      setError("Senha incorreta. Tente novamente.");
      setPassword("");
    }
  }

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white border border-gray-100 p-10">
          <div className="flex flex-col items-center mb-10">
            <div className="w-14 h-14 bg-primary flex items-center justify-center mb-5">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-semibold text-primary">Área Administrativa</h1>
            <p className="text-muted-foreground font-light text-sm mt-2">
              Paróquia Nossa Senhora Aparecida
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Senha de Acesso
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(""); }}
                  className="w-full border border-gray-200 px-4 py-3 text-sm text-primary font-light focus:outline-none focus:border-primary pr-12"
                  placeholder="Digite a senha"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {error && (
                <p className="text-red-500 text-xs mt-2 font-light">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors"
            >
              Entrar
            </button>
          </form>

          <p className="text-center text-xs text-muted-foreground font-light mt-8">
            Acesso restrito à equipe pastoral
          </p>
        </div>
      </div>
    </div>
  );
}
