import { Button } from "@/components/ui/button";
import InputLabel from "@/components/ui/input-label";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <main className="min-h-screen w-full flex flex-col  justify-center items-center py-2 px-6">
      <div className="w-clampForm">
        <Image
          src="/logo.png"
          alt="SIGA - SISTEMA INTEGRADO DE GESTÃO ACADEMICA"
          width={0}
          height={0}
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="w-full sm:mb-10 mb-5"
        />
        <form className="flex flex-col gap-7" action="">
          <div>
            <InputLabel
              label="Usuário:"
              type="text"
              placeholder="Digite seu CPF"
            />
          </div>

          <div className="flex flex-col gap-2">
            <InputLabel
              label="Senha:"
              type="password"
              placeholder="Digite sua senha"
            />
            <Link href="/recover-password" className="self-end text-clampXs">
              Esqueceu sua senha?
            </Link>
          </div>
          <Button
            variant="secondary"
            className="font-normal h-12 sm:h-16  sm:rounded-[1.25rem] w-full sm:text-2xl"
          >
            Confirmar
          </Button>
          <p className="text-center text-clampXs">Problemas com o acesso?</p>
        </form>
      </div>
    </main>
  );
}
