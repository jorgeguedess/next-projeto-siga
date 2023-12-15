import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  IDisciplineFouls,
  IDisciplineNotes,
  tableHeadNames,
} from "@/lib/student";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface TableStudyProps {
  className?: string;
  nameTable: "notes" | "fouls";
  data: any;
}

interface TitleTableProps {
  notes?: string;
  fouls?: string;
}

const TableStudy = ({ className, nameTable, data }: TableStudyProps) => {
  const titleTable: TitleTableProps = {
    notes: "Notas",
    fouls: "Faltas",
  };

  return (
    <ScrollArea
      className={`shadow-table flex h-full w-full flex-col gap-6 rounded-md border border-[#E5E5E5] bg-secondary-foreground font-main ${twMerge(
        className,
      )}`}
    >
      <div className="flex items-center justify-between p-6 px-5">
        <h2 className="text-2xl font-bold capitalize text-primary-foreground">
          {titleTable[nameTable]}
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

      <Table className="overflow-hidden text-center">
        <TableHeader>
          <TableRow className="bg-background uppercase">
            {tableHeadNames[nameTable].map((headName, id: number) => (
              <TableHead
                key={headName + id}
                className={`${headName === "DISCIPLINAS" && "text-left"}`}
              >
                {headName}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="text-center">
          {nameTable! && null}
          {nameTable === "notes" &&
            data.map((discipline: IDisciplineNotes) => (
              <TableRow key={discipline.id}>
                <TableCell className="text-left font-medium">
                  {discipline.name}
                </TableCell>
                <TableCell>
                  {discipline.p1 === null ? "--" : discipline.p1}
                </TableCell>
                <TableCell>{discipline.work1}</TableCell>
                <TableCell>
                  {discipline.p2 === null ? "--" : discipline.p2}
                </TableCell>
                <TableCell>{discipline.work2}</TableCell>
                <TableCell>
                  {discipline.p3 === null ? "--" : discipline.p3}
                </TableCell>
                <TableCell>{discipline.average}</TableCell>
              </TableRow>
            ))}
          {nameTable === "fouls" &&
            data.map((discipline: IDisciplineFouls) => (
              <TableRow key={discipline.id}>
                <TableCell className="text-left font-medium">
                  {discipline.name}
                </TableCell>
                <TableCell>
                  {discipline.absences === null ? "--" : discipline.absences}
                </TableCell>
                <TableCell>
                  {discipline.presences === null ? "--" : discipline.presences}
                </TableCell>
                <TableCell>
                  {discipline.frequency === null
                    ? "--"
                    : discipline.frequency + "%"}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default TableStudy;
