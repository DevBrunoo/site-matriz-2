import { PageHero } from "@/components/PageHero";

export default function Missas() {
  return (
    <main className="w-full">
      <PageHero category="Agenda" title="Horários de Missa" />

      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground font-light leading-relaxed text-base">
            Os horários de missa estão sendo atualizados. Entre em contato com a secretaria pelo WhatsApp{" "}
            <a
              href="https://wa.me/5516994648668"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-medium underline underline-offset-2 hover:text-primary transition-colors"
            >
              (16) 99464-8668
            </a>{" "}
            ou telefone <span className="font-medium text-primary">(16) 3947-6524</span> para confirmar.
          </p>
        </div>
      </section>
    </main>
  );
}
