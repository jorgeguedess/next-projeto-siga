import { Input, InputProps } from "./input";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import Link from "next/link";

interface InputLabelProps extends InputProps {
  label: string;
  link?: string | null;
}
const InputLabel = ({
  className,
  label,
  link = null,
  ...props
}: InputLabelProps) => {
  return (
    <FormItem className="flex flex-col">
      <FormLabel className="capitalize">{label}:</FormLabel>
      <FormControl>
        <Input
          className="bg-input placeholder:text-inputText py-inputY"
          type="text"
          placeholder="Digite seu CPF"
          {...props}
        />
      </FormControl>
      {link && (
        <FormDescription className="self-end">
          <Link href="/reset-password">{link}</Link>
        </FormDescription>
      )}
      <FormMessage />
    </FormItem>
  );
};

export default InputLabel;
