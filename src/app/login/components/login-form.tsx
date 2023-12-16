"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import InputLabel from "./input-label";
import { normalizeCpfNumber, normalizePassword } from "@/masks/mask";

import { useRouter } from "next/navigation";

export const formSchema = z.object({
  username: z
    .string()
    .max(11, {
      message:
        "O CPF deve conter exatamente 11 dígitos. Por favor, verifique e tente novamente.",
    })
    .min(11, {
      message:
        "O CPF deve conter exatamente 11 dígitos. Por favor, verifique e tente novamente.",
    })
    .refine((value) => normalizeCpfNumber(value), {
      message:
        "O CPF informado é inválido. Por favor, verifique se digitou corretamente.",
    }),
  password: z.string().refine((value) => normalizePassword(value), {
    message:
      "A senha deve ter pelo menos 4 caracteres, incluindo pelo menos uma letra e um dígito",
  }),
});

export const LoginForm = () => {
  const router = useRouter();

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!values) return;
    console.log(values);
    router.push("/home", { scroll: false });
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        method="POST"
        className="flex flex-col gap-7"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <InputLabel
              placeholder="Digite seu CPF"
              label="usuário"
              type="number"
              {...field}
            />
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <InputLabel
              label="senha"
              placeholder="Digite sua Senha"
              link="Esqueceu sua senha?"
              type="password"
              {...field}
            />
          )}
        />

        <Button
          type="submit"
          variant="secondary"
          className="h-12 w-full font-normal  sm:h-16 sm:rounded-[1.25rem] sm:text-2xl"
        >
          Confirmar
        </Button>
      </form>
      <p className="mt-6 text-center text-base">Problemas com o acesso?</p>
    </Form>
  );
};
