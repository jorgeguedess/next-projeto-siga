import { Button, ButtonProps } from "@/components/ui/button";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonActionProps extends ButtonProps {
  icon: ReactNode;
}

const ButtonAction = ({
  className,
  icon,
  children,
  ...props
}: ButtonActionProps) => {
  return (
    <Button
      variant="pdf"
      className={`gap-1 self-end ${twMerge(className)}`}
      {...props}
    >
      {icon}
      <span className="sr-only font-secondary text-sm font-light text-inherit md:not-sr-only">
        {children}
      </span>
    </Button>
  );
};

export default ButtonAction;
