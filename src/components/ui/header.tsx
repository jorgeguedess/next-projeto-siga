import {
  AlignJustifyIcon,
  BookOpenIcon,
  BookTextIcon,
  CommandIcon,
  FolderOpenIcon,
  LibraryBigIcon,
  PowerIcon,
  SettingsIcon,
  UserRoundIcon,
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { Input } from "./input";
import IconGoogle from "./icon-google";
import Image from "next/image";
import HeaderMenuItem from "./header-menu-item";
import { Separator } from "./separator";
import { ScrollArea } from "./scroll-area";
import Link from "next/link";

const Header = () => {
  return (
    <header className="mb-10 flex w-full items-center justify-between gap-3 bg-primary p-5 text-secondary-foreground shadow-full">
      <Sheet>
        <SheetTrigger className="py-2">
          <AlignJustifyIcon className="h-7 w-7" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-secondary p-0 text-secondary-foreground before:absolute before:right-[-2rem] before:z-50 before:h-full before:w-1/12 before:bg-destructive"
        >
          <SheetHeader className="py-6 pl-9 sm:py-10">
            <Link href="/home">
              <Image
                src="/logo-white.svg"
                alt="SIGA - SISTEMA INTEGRADO DE GESTÃO ACADEMICA"
                width={0}
                height={0}
                sizes="100vw"
                style={{ objectFit: "cover" }}
                className="w-full max-w-[70%]"
              />
            </Link>
          </SheetHeader>
          <ScrollArea className="h-full max-h-[90%] w-full">
            <ul className="flex flex-col gap-2">
              <HeaderMenuItem
                icon={<UserRoundIcon />}
                label="Matrícula"
                path="/matricula"
              />
              <HeaderMenuItem
                icon={<FolderOpenIcon />}
                label="Consultas"
                path="/consultas"
              />
              <HeaderMenuItem
                icon={<BookTextIcon />}
                label="Planos de Ensino"
                path="/planos-ensino"
              />
              <HeaderMenuItem
                icon={<CommandIcon />}
                label="Matrizes em Inglês"
                path="/matrizes-ingles"
              />
              <HeaderMenuItem
                icon={<LibraryBigIcon />}
                label="Biblioteca"
                path="/biblioteca"
              />
              <HeaderMenuItem
                icon={<BookOpenIcon />}
                label="Solicitações"
                path="/solicitacoes"
              />
              <Separator className="my-2" />
              <HeaderMenuItem icon={<SettingsIcon />} label="Conta" path="#" />
              <HeaderMenuItem icon={<PowerIcon />} label="Sair" path="#" />
            </ul>
          </ScrollArea>
        </SheetContent>
      </Sheet>
      <div className="flex w-full max-w-[80%]  items-center py-4 text-primary">
        <IconGoogle
          name="search"
          className="relative bottom-[0.625rem] left-8 shrink-0 translate-y-1/2 transform text-icon"
        />
        <Input
          placeholder="Procurar"
          className="placeholder:text-ico pl-10 font-secondary text-base placeholder:font-bold"
        />
      </div>
    </header>
  );
};

export default Header;
