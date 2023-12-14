"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

import { ptBR } from "date-fns/locale";
import { Separator } from "@/components/ui/separator";
import CalendarTask from "./components/calendar-task";
import TableStudy from "./components/table-study";

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
    <main className="px-1 font-main text-base">
      <h1 className="mb-6 px-5">Dashboard</h1>
      <div className="flex flex-col gap-9 sm:flex-row-reverse">
        <div className="px-5">
          <div className="mx-auto flex w-full max-w-xs flex-col gap-7 rounded-md bg-white p-5 font-secondary">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              locale={ptBR}
            />
            <Separator className="bg-[#A5A5A5]" />
            <ul className="flex flex-col gap-7">
              {calendarTask.map((task) => (
                <CalendarTask
                  key={task.contentText}
                  dateText={task.dateText}
                  contentText={task.contentText}
                />
              ))}
            </ul>
          </div>
        </div>
        <TableStudy className="flex-1 sm:mx-5" />
      </div>
    </main>
  );
}
