import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

const PictureImage = ({ src, alt, className }: ImageProps) => {
  return (
    <picture className={`w-full ${twMerge(className)}`}>
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        style={{ objectFit: "cover" }}
        className="w-full"
      />
    </picture>
  );
};

export default PictureImage;
