import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

export const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactInput) => {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", data);
      return { success: true };
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada!",
        description: "Agradecemos o seu contato. Retornaremos em breve.",
      });
    },
    onError: () => {
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um problema. Tente novamente mais tarde.",
        variant: "destructive",
      });
    },
  });
}
