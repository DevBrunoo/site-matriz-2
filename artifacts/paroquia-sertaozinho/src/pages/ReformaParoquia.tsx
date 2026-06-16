import { PageHero } from "@/components/PageHero";

export default function ReformaParoquia() {
  return (
    <main className="w-full">
      <PageHero category="Matriz" title="Reforma da Paróquia" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <p className="text-muted-foreground font-light leading-relaxed">
          Informações sobre as obras de reforma da Paróquia Nossa Senhora Aparecida em breve.
          Para mais detalhes, entre em contato com a secretaria paroquial pelo{" "}
          <a
            href="https://wa.me/5516994648668"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary font-medium hover:underline"
          >
            WhatsApp (16) 99464-8668
          </a>{" "}
          ou telefone <span className="font-medium text-primary">(16) 3947-6524</span>.
        </p>
      </div>
    </main>
  );
}
