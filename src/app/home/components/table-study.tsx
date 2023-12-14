import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { arrayDisciplines } from "@/lib/student";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface TableStudyProps {
  className?: string;
}

const TableStudy = ({ className }: TableStudyProps) => {
  console.log(arrayDisciplines);

  return (
    <div
      className={`flex flex-col gap-6 bg-secondary-foreground py-5 font-main ${twMerge(
        className,
      )}`}
    >
      <div className="flex justify-between px-5">
        <h2 className="text-2xl font-bold capitalize text-primary-foreground">
          Notas
        </h2>
        <div className="flex items-center justify-center gap-2">
          <Button variant="ghost">
            <ChevronLeftIcon />
          </Button>
          <span className="font-secondary text-xs font-bold text-primary">
            1º SEMESTRE
          </span>
          <Button variant="ghost">
            <ChevronRightIcon />
          </Button>
        </div>
      </div>

      <Table className="overflow-hidden">
        <TableHeader>
          <TableRow className="bg-background uppercase">
            <TableHead className="w-[100px]">DISCIPLINAS</TableHead>
            <TableHead>P1</TableHead>
            <TableHead>TRABALHO</TableHead>
            <TableHead>P2</TableHead>
            <TableHead>TRABALHO</TableHead>
            <TableHead>P3</TableHead>
            <TableHead>MÉDIA FINAL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-center">
          {arrayDisciplines.map((disciplina) => (
            <TableRow key={disciplina.name}>
              <TableCell className="text-left font-medium">
                {disciplina.name}
              </TableCell>
              <TableCell>
                {disciplina.p1 === null ? "--" : disciplina.p1}
              </TableCell>
              <TableCell>{disciplina.work1}</TableCell>
              <TableCell>
                {disciplina.p2 === null ? "--" : disciplina.p2}
              </TableCell>
              <TableCell>{disciplina.work2}</TableCell>
              <TableCell>
                {disciplina.p3 === null ? "--" : disciplina.p3}
              </TableCell>
              <TableCell>{disciplina.media}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableStudy;
