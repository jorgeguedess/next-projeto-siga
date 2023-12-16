import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TitleProps {
  level?: "h1" | "h2" | "h3";
  className?: string;
  children: ReactNode;
}

const Title = ({ level = "h1", className, children }: TitleProps) => {
  const Heading = level as keyof JSX.IntrinsicElements;

  return (
    <Heading
      className={`mb-3 px-5 print:font-main print:text-2xl print:font-bold md:text-xl ${twMerge(
        className,
      )}`}
    >
      {children}
    </Heading>
  );
};

export default Title;
