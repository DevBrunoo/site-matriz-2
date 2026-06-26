import { ContentPageLayout } from "@/components/ContentPageLayout";
const BASE = import.meta.env.BASE_URL;
export default function Rcc() {
  return <ContentPageLayout blockKey="rcc" category="Pastorais" leftTitle="Sobre o Grupo" rightTitle="Encontros e Atividades" ctaLabel="Entrar em Contato" ctaHref="/contato" imageSrc={`${BASE}pastorais/rcc.png`} />;
}
