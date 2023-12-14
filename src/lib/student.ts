class Disciplina {
  name: string;
  p1: number | null;
  work1: number;
  p2: number;
  work2: number;
  p3: number | null;
  media: number;

  constructor(
    name: string,
    p1: number | null,
    work1: number,
    p2: number,
    work2: number,
    p3: number | null,
  ) {
    this.name = name;
    this.p1 = p1;
    this.work1 = work1;
    this.p2 = p2;
    this.work2 = work2;
    this.p3 = p3;
    this.media = 0;
  }

  calcularMedia(): void {
    const notes = [this.p1 || 0, this.work1, this.p2, this.work2, this.p3 || 0];
    const sum = notes.reduce((acc, nota) => acc + nota, 0);
    this.media = sum / notes.length;
  }
}

export const arrayDisciplines: Disciplina[] = [
  new Disciplina("Algorítimos e Lógica de Prog", 10, 9, 8, 8, null),
  new Disciplina("Bases da Internet", 0, 8, 10, 7, 8),
  new Disciplina("Criação de Conteúdo Web", 8, 7, 9, 6, null),
  new Disciplina("Design Digital", 7, 10, 8, 9, null),
  new Disciplina("Inglês I", 9, 8, 7, 10, null),
  new Disciplina("Leitura e Produção de Textos", 7, 10, 9, 9, null),
  new Disciplina("Padrões e Projetos de Sítios I", null, 5, 8, 9, 8),
];

arrayDisciplines.forEach((disciplina) => disciplina.calcularMedia());

export const results = arrayDisciplines.map((disciplina) => ({
  name: disciplina.name,
  media: disciplina.media,
}));
