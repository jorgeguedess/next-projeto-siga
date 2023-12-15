import { v4 as uuidv4 } from "uuid";

type nameDisciplines =
  | "Algorítimos e Lógica de Prog"
  | "Bases da Internet"
  | "Criação de Conteúdo Web"
  | "Design Digital"
  | "Inglês I"
  | "Leitura e Produção de Textos"
  | "Padrões e Projetos de Sítios I";

interface IDiscipline {
  id: string;
  name: nameDisciplines;
}

export interface IDisciplineNotes extends IDiscipline {
  p1: number | null;
  work1: number;
  p2: number;
  work2: number;
  p3: number | null;
  average: number;
}

export interface IDisciplineFouls extends IDiscipline {
  absences: number;
  presences: number;
  frequency: number;
}

export type IDisciplineAll = IDiscipline & IDisciplineNotes & IDisciplineFouls;

function calculateAverage(discipline: IDisciplineNotes): IDisciplineNotes {
  const notes = [
    discipline.p1 || 0,
    discipline.work1,
    discipline.p2,
    discipline.work2,
    discipline.p3 || 0,
  ];
  const sum = notes.reduce((acc, note) => acc + note, 0);
  return { ...discipline, average: sum / notes.length };
}

function calculateFrequency(disciplina: IDisciplineFouls): IDisciplineFouls {
  const frequency =
    (disciplina.presences / (disciplina.presences + disciplina.absences)) * 100;
  return {
    ...disciplina,
    frequency,
  };
}

const arrayDisciplines: IDisciplineAll[] = [
  {
    id: uuidv4(),
    name: "Algorítimos e Lógica de Prog",
    p1: 10,
    work1: 9,
    p2: 8,
    work2: 8,
    p3: null,
    average: 0,
    absences: 0,
    presences: 34,
    frequency: 0,
  },
  {
    id: uuidv4(),
    name: "Bases da Internet",
    p1: 0,
    work1: 8,
    p2: 10,
    work2: 7,
    p3: 8,
    average: 0,
    absences: 0,
    presences: 31,
    frequency: 0,
  },
  {
    id: uuidv4(),
    name: "Criação de Conteúdo Web",
    p1: 8,
    work1: 7,
    p2: 9,
    work2: 6,
    p3: null,
    average: 0,
    absences: 0,
    presences: 29,
    frequency: 0,
  },
  {
    id: uuidv4(),
    name: "Design Digital",
    p1: 7,
    work1: 10,
    p2: 8,
    work2: 9,
    p3: null,
    average: 0,
    absences: 0,
    presences: 47,
    frequency: 0,
  },
  {
    id: uuidv4(),
    name: "Inglês I",
    p1: 9,
    work1: 8,
    p2: 7,
    work2: 10,
    p3: null,
    average: 0,
    absences: 0,
    presences: 39,
    frequency: 0,
  },
  {
    id: uuidv4(),
    name: "Leitura e Produção de Textos",
    p1: 7,
    work1: 10,
    p2: 9,
    work2: 9,
    p3: null,
    average: 0,
    absences: 0,
    presences: 39,
    frequency: 0,
  },
  {
    id: uuidv4(),
    name: "Padrões e Projetos de Sítios I",
    p1: null,
    work1: 5,
    p2: 8,
    work2: 9,
    p3: 8,
    average: 0,
    absences: 0,
    presences: 39,
    frequency: 0,
  },
];

export const disciplinesWithAverage = arrayDisciplines.map(calculateAverage);
export const disciplinesWithFrequency =
  arrayDisciplines.map(calculateFrequency);

type IHeadNamesNotes =
  | "DISCIPLINAS"
  | "P1"
  | "TRABALHO"
  | "P2"
  | "TRABALHO"
  | "P3"
  | "MÉDIA FINAL";

type IHeadNamesFouls = "DISCIPLINAS" | "AUSÊNCIAS" | "PRESENÇAS" | "FREQUÊNCIA";

type ITableHeadNamesProps = {
  notes: IHeadNamesNotes[];
  fouls: IHeadNamesFouls[];
};

export const tableHeadNames: ITableHeadNamesProps = {
  notes: [
    "DISCIPLINAS",
    "P1",
    "TRABALHO",
    "P2",
    "TRABALHO",
    "P3",
    "MÉDIA FINAL",
  ],
  fouls: ["DISCIPLINAS", "AUSÊNCIAS", "PRESENÇAS", "FREQUÊNCIA"],
};
