import { LoginForm } from "@/app/login/components/login-form";
import Image from "next/image";

export default function Login() {
  return (
    <main className="flex min-h-screen w-full flex-col  items-center justify-center px-6 py-2">
      <div className="w-clampForm">
        <Image
          src="/logo-black.svg"
          alt="SIGA - SISTEMA INTEGRADO DE GESTÃO ACADEMICA"
          width={0}
          height={0}
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="mb-5 w-full sm:mb-10"
        />
        <LoginForm />
      </div>
    </main>
  );
}
