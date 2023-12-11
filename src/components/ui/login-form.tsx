"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import InputLabel from "./input-label";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(4, {
    message: "Password must be at least 4 characters.",
  }),
});

export const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-7"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => <InputLabel label="usuário" {...field} />}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <InputLabel label="senha" link="Esqueceu sua senha?" {...field} />
          )}
        />

        <Button
          type="submit"
          variant="secondary"
          className="font-normal h-12 sm:h-16  sm:rounded-[1.25rem] w-full sm:text-2xl"
        >
          Confirmar
        </Button>
      </form>
      <p className="text-center text-clampXs mt-4">Problemas com o acesso?</p>
    </Form>
  );
};
