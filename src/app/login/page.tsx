import { LoginForm } from "@/components/ui/login-form";
import Image from "next/image";

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
        <LoginForm />
      </div>
    </main>
  );
}
