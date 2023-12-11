import { twMerge } from "tailwind-merge";
import { Input, InputProps } from "./input";

interface InputLabelProps extends InputProps {
  label: string;
}

const InputLabel = ({ className, label, ...props }: InputLabelProps) => {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-clamp3Xl capitalize">{label}</span>
      <Input
        className={`bg-input placeholder:text-inputText text-clampXl py-inputY  ${twMerge(
          className
        )}`}
        {...props}
      />
    </label>
  );
};

export default InputLabel;
