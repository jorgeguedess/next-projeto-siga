import Title from "@/components/ui/title";
import PictureImage from "./components/picture-image";
import { ImageActions } from "./components/image-actions";

export default function MatriculaPage() {
  const imagePdf = {
    src: "/pdf-matricula.jpg",
    alt: `
    Fatec CAS SÃO Baixada Santista - Rubens Lara
    Paula Souza GOVERNO DO ESTADO
    
    ATESTADO
    
    Atestamos para os devidos fins que, RG é aluno regularmente matriculado na Faculdade de Tecnologia da Baixada Santista Rubens Lara, sob o Registro Acadêmico nº no 2º semestre da estrutura curricular do CURSO SUPERIOR DE TECNOLOGIA EM SISTEMAS PARA INTERNET, noturno/diurno, tendo ingressado através do Concurso Vestibular no segundo semestre de 2020.
    
    A referida acadêmica encontra-se matriculada e frequentando as aulas no 1º semestre de 2021 conforme a estrutura curricular, disciplinas e horários de aulas descritos abaixo:
    
    DDI004 - Legislação Aplicada à Internet (SIST. INTERNET diurno)
    
    Segunda-Feira: 11:20 - 12:10
    Segunda-Feira: 12:10 - 13:00
    IED001 - Estruturas de Dados (SIST. INTERNET diurno)
    
    Terça-Feira: 09:30 - 10:20
    Terça-Feira: 10:20 - 11:10
    Terça-Feira: 11:20 - 12:10
    Terça-Feira: 12:10 - 13:00
    ING008 - Inglês II (SIST. INTERNET diurno)
    
    Sexta-Feira: 07:40 - 08:30
    Sexta-Feira: 08:30 - 09:20
    IRC009 - Redes e Internet (SIST. INTERNET diurno)
    
    Quinta-Feira: 09:30 - 10:20
    `,
  };

  const imageRendimento = {
    src: "/rendimento.svg",
    alt: `
    Rendimento no curso: PP
    PP: 12,34%
    PR: 12,34%
    Maior PR: 12,34%
    `,
  };

  const imageIntegralizacao = {
    src: "/integralização.svg",
    alt: `
    Prazo de Integralização
    Cursado: 1
    Total: 10
    `,
  };

  return (
    <div className="py-10">
      <Title level="h1">Matrícula</Title>
      <div className="md:border-pdf mx-auto flex w-full max-w-5xl flex-col md:flex-row-reverse md:gap-14 md:rounded-md md:border md:bg-secondary-foreground md:px-14 md:pb-24 md:pt-9">
        <section className="mx-auto flex h-full w-[94%] max-w-2xl flex-1 flex-col gap-2 px-1 md:flex-col-reverse">
          <div className="flex w-full flex-col gap-2">
            <Title level="h2" className="sr-only md:not-sr-only">
              Comprovante de Matrícula
            </Title>
            <PictureImage
              src={imagePdf.src}
              alt={imagePdf.alt}
              className="bg-pdf p-3 print:mb-12"
            />
          </div>
          <ImageActions imageUrl={imagePdf.src} />
        </section>
        <section>
          <Title level="h2">Perfil do Aluno(a)</Title>
          <div className="w-full bg-secondary-foreground pb-4 pt-7 print:p-0 ">
            <div className="mx-auto flex max-w-[13rem] flex-col items-center justify-center gap-4 text-center print:max-w-fit">
              <div className="h-[6.25rem] w-[6.25rem] bg-[#C4C4C4] md:h-[10rem] md:w-[10rem]"></div>
              <p className="font-bold text-card-foreground print:text-xl md:text-xl">
                Nome completo do aluno
              </p>
              <span className="text-xs font-light text-primary print:text-base">
                Sistemas Para Internet <br /> Turno: Diurno Ciclo: 2
              </span>
              <span className="mb-4 text-xs font-light text-primary print:text-base">
                nomedoaluno@fatec.sp.gov.br <br /> RA: 123456789000
              </span>
              <PictureImage
                src={imageRendimento.src}
                alt={imageRendimento.alt}
                className="mb-10"
              />
              <PictureImage
                src={imageIntegralizacao.src}
                alt={imageIntegralizacao.alt}
                className="mb-10"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
