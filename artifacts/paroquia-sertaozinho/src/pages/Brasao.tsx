import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function Brasao() {
  return (
    <main className="w-full pt-16 sm:pt-20 pb-24">
      <PageHero category="Paróquia Nossa Senhora Aparecida" title="Brasão Paroquial" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Imagem */}
          <motion.div variants={fadeUp} className="flex justify-center lg:sticky lg:top-28">
            <img
              src={`${import.meta.env.BASE_URL}brasao.png`}
              alt="Brasão da Paróquia Nossa Senhora Aparecida"
              className="w-full max-w-xs sm:max-w-sm object-contain drop-shadow-xl"
            />
          </motion.div>

          {/* Texto */}
          <div className="space-y-12">
            <motion.div variants={fadeUp}>
              <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">Apresentado em 2018</span>
              <h2 className="font-display text-3xl font-bold text-primary mb-4">O Brasão</h2>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-secondary" />
                <div className="w-2 h-2 rotate-45 bg-secondary/50" />
              </div>
              <p className="text-muted-foreground font-light leading-relaxed text-sm">
                Nosso brasão foi apresentado à comunidade em 02 de outubro de 2018, na Celebração de Abertura da 72ª Festa da Padroeira <em>"Com Maria, celebrando o Ano Nacional do Laicato"</em>.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="font-display text-xl font-semibold text-primary mb-4">Explicação Heráldica</h3>
              <div className="w-8 h-px bg-secondary/50 mb-5" />
              <p className="text-muted-foreground font-light leading-relaxed text-sm">
                O escudo em sua totalidade apresenta o mesmo formato do da Família Real Portuguesa. O mesmo apresenta dois escudos no mesmo formato, um sobrepondo ao outro, o maior em amarelo e o menor em azul marinho, sendo que o menor recebe os símbolos: a coroa real portuguesa, logo abaixo o monograma mariano AM, à direita um lírio e à esquerda a cana-de-açúcar.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed text-sm mt-4">
                Na parte inferior, uma rede em forma de fuso perpassa todo o escudo e, de alto a baixo, a Cruz Paroquial folheada a ouro. Abaixo, dois listeis em prata: no primeiro, a inscrição <strong className="text-primary font-medium">PARÓQUIA NOSSA SENHORA APARECIDA</strong> e, no segundo, menor, a inscrição <strong className="text-primary font-medium">SERTÃOZINHO-SP</strong>.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="font-display text-xl font-semibold text-primary mb-4">Interpretação</h3>
              <div className="w-8 h-px bg-secondary/50 mb-5" />
              <div className="space-y-3 text-sm text-muted-foreground font-light leading-relaxed">
                <p>O formato do escudo, sendo o mesmo da família real portuguesa, lembra que foram os portugueses que trouxeram a devoção à Imaculada Conceição para o Brasil.</p>
                <p>O escudo maior, em amarelo, lembra as ricas terras de Santa Cruz e também a bandeira do município, lembrando a riqueza da Alta Mogiana.</p>
                <p>O escudo menor, em azul marinho, lembra o céu nas noites sem luar — o mesmo azul do Manto da Padroeira do Brasil, Nossa Senhora Aparecida.</p>
                <p>A coroa denota a verdadeira soberana do Brasil. O monograma AM é a forma abreviada de <em>"Ave Maria"</em>, a saudação do Arcanjo Gabriel, o mesmo que consta no Altar Mor da paróquia.</p>
                <p>À destra, um lírio, símbolo de pureza de Maria. À sinistra, a cana-de-açúcar, símbolo do trabalho e da riqueza econômica da cidade.</p>
                <p>As redes lembram as redes de Pedro, o apóstolo pescador, e tantos outros que trazem em suas redes a vida e a esperança de uma evangelização profícua.</p>
                <p>A Cruz Paroquial em ouro, que perpassa todo o escudo, lembra Cristo, Cabeça da Igreja.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className="text-xs text-muted-foreground font-light">
                Forania: Nossa Senhora Aparecida · Arquidiocese de Ribeirão Preto
              </p>
              <a
                href="https://youtu.be/LB9YRAZMgu4?si=FO6Bw2aVLsYYbwDk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-[11px] font-bold tracking-[0.18em] uppercase text-secondary hover:text-primary transition-colors border-b border-secondary/30 hover:border-primary pb-0.5"
              >
                Ver vídeo explicativo →
              </a>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </main>
  );
}
