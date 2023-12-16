"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

import { ptBR } from "date-fns/locale";
import { Separator } from "@/components/ui/separator";
import CalendarTask from "./components/calendar-task";
import TableStudy from "./components/table-study";
import {
  disciplinesWithAverage,
  disciplinesWithFrequency,
} from "@/lib/student";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Title from "@/components/ui/title";

export default function HomePage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const tasks = [
    {
      dateText: "8 JUN TER",
      contentText: "P1 Estrutura de Dados",
    },
    {
      dateText: "21 JUN SEG",
      contentText: "T1 Design",
    },
    {
      dateText: "25 JUN SEX",
      contentText: "P2 Matemática",
    },
  ];

  const [calendarTask] = useState(tasks);

  return (
    <main className="px-1 py-10 font-main text-base">
      <Title className="mb-6">Dashboard</Title>
      <div className="flex flex-col gap-9 md:flex-row-reverse">
        <div className="px-5">
          <ScrollArea className="mx-auto h-full w-full max-w-xs  rounded-md bg-white p-5 font-secondary">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              locale={ptBR}
            />
            <Separator className="my-7 bg-[#A5A5A5] md:my-10" />
            <ul className="flex flex-col gap-7">
              {calendarTask.map((task) => (
                <CalendarTask
                  key={task.contentText}
                  dateText={task.dateText}
                  contentText={task.contentText}
                />
              ))}
            </ul>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
        <section className="mx-1 flex h-full w-full flex-1 flex-col gap-9 overflow-hidden sm:mx-5">
          <TableStudy nameTable="notes" data={disciplinesWithAverage} />
          <TableStudy nameTable="fouls" data={disciplinesWithFrequency} />
        </section>
      </div>
    </main>
  );
}
