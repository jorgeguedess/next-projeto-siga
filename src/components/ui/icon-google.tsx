import { twMerge } from "tailwind-merge";

interface IconGoogleProps {
  name: string;
  className?: string;
}

const IconGoogle = ({ name, className }: IconGoogleProps) => {
  return (
    <i className={`material-symbols-outlined ${twMerge(className)}`}>{name}</i>
  );
};

export default IconGoogle;
