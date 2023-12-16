"use client";

import { useEffect, useState } from "react";
import ButtonAction from "./button-action";
import { AlertCircle, DownloadIcon, PrinterIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface ImageActionsProps {
  imageUrl: string;
}

export const ImageActions: React.FC<ImageActionsProps> = ({ imageUrl }) => {
  const [isValidImage, setIsValidImage] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const checkImageValidity = async () => {
    try {
      const response = await fetch(imageUrl);
      if (!response.ok) {
        setIsValidImage(false);
      }
    } catch (error) {
      console.error("Error checking image validity", error);
      setIsValidImage(false);
    }
  };

  const handleDownload = () => {
    if (isValidImage) {
      try {
        const downloadLink = document.createElement("a");
        downloadLink.href = imageUrl;
        downloadLink.download = "image.jpg";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      } catch (error) {
        console.error("Error checking image validity", error);
      }
    } else {
      console.error("The image is not valid. Unable to download");
      setErrorMessage("Erro ao realizar o download da imagem!");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    checkImageValidity();
  }, [imageUrl]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [errorMessage]);

  return (
    <>
      <div className="flex w-full flex-col items-center justify-end gap-2 print:hidden md:flex-row">
        <ButtonAction icon={<DownloadIcon />} onClick={handleDownload}>
          Download
        </ButtonAction>
        <ButtonAction
          icon={<PrinterIcon />}
          className="hidden md:inline-flex"
          onClick={handlePrint}
        >
          Imprimir
        </ButtonAction>
      </div>
      {!isValidImage && errorMessage && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Erro</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}
    </>
  );
};
