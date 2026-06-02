import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useSubmitContact, contactSchema, type ContactInput } from "@/hooks/use-contact";

export default function Contato() {
  const { mutate: submitContact, isPending } = useSubmitContact();
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactInput) => {
    submitContact(data, {
      onSuccess: () => reset()
    });
  };

  return (
    <main className="pt-24 pb-20">
      <section className="bg-primary py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display text-white">Fale Conosco</h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-white/90">
            Estamos à disposição para atender você. Entre em contato com a secretaria paroquial.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info Side */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold font-display text-primary">Informações de Contato</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Endereço</h4>
                  <p className="text-sm text-muted-foreground">Rua Cel. Quito Junqueira, S/N<br/>Centro, Sertãozinho - SP<br/>CEP: 14160-000</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Telefone</h4>
                  <p className="text-sm text-muted-foreground">(16) 3942-0000</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">E-mail</h4>
                  <p className="text-sm text-muted-foreground">secretaria@paroquiaaparecida.org.br</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Secretaria</h4>
                  <p className="text-sm text-muted-foreground">Ter a Sex: 08h - 17h30<br/>Sáb: 08h - 12h</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-muted rounded-2xl overflow-hidden relative border border-border">
               <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                 <p className="text-muted-foreground font-medium flex items-center gap-2">
                   <MapPin className="w-5 h-5"/> Mapa de Localização
                 </p>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-border">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Envie uma mensagem</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Nome Completo</label>
                <input 
                  {...register("name")}
                  className={`w-full px-4 py-3 rounded-xl bg-background border-2 ${errors.name ? 'border-destructive focus:ring-destructive/10' : 'border-border focus:border-primary focus:ring-primary/10'} focus:outline-none focus:ring-4 transition-all`}
                  placeholder="Seu nome"
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">E-mail</label>
                <input 
                  {...register("email")}
                  type="email"
                  className={`w-full px-4 py-3 rounded-xl bg-background border-2 ${errors.email ? 'border-destructive focus:ring-destructive/10' : 'border-border focus:border-primary focus:ring-primary/10'} focus:outline-none focus:ring-4 transition-all`}
                  placeholder="seu@email.com"
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Mensagem</label>
                <textarea 
                  {...register("message")}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl bg-background border-2 ${errors.message ? 'border-destructive focus:ring-destructive/10' : 'border-border focus:border-primary focus:ring-primary/10'} focus:outline-none focus:ring-4 transition-all resize-none`}
                  placeholder="Como podemos ajudar?"
                />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isPending}>
                {isPending ? "Enviando..." : (
                  <>
                    <Send className="w-4 h-4 mr-2" /> Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}
