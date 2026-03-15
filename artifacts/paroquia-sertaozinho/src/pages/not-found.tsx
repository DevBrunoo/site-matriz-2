import { Link } from "wouter";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold text-primary mb-4 font-display">404</h1>
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Página não encontrada</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida. Que tal voltar para o início?
        </p>
        <Link href="/">
          <Button variant="default" size="lg">
            Voltar para a Página Inicial
          </Button>
        </Link>
      </div>
    </div>
  );
}
