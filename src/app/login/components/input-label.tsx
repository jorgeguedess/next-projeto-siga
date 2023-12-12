import { Input, InputProps } from "../../../components/ui/input";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
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
          {...props}
        />
      </FormControl>
      <FormMessage />

      {link && (
        <FormDescription className="self-end">
          <Link href="/reset-password" className="hover:underline">
            {link}
          </Link>
        </FormDescription>
      )}
    </FormItem>
  );
};

export default InputLabel;
