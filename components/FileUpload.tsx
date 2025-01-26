"use client";

import { toast } from "@/hooks/use-toast";
import config from "@/lib/config";
import { cn } from "@/lib/utils";
import {
  IKImage,
  IKUpload,
  ImageKitContext,
  ImageKitProvider,
} from "imagekitio-next";
import Image from "next/image";
import { useRef, useState } from "react";

const authenticator = async () => {
  try {
    const res = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

    if (!res.ok) {
      const errorText = await res.text();

      throw new Error(`Request failed with status ${res.status}: ${errorText}`);
    }

    const data = await res.json();

    const { signature, expire, token } = data;

    return { signature, expire, token };
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const FileUpload = ({
  onFileChange,
}: {
  onFileChange: (filePath: string) => void;
}) => {
  const {
    env: {
      imagekit: { publicKey, urlEndpoint },
    },
  } = config;

  const ref = useRef(null);

  const onError = (error : any) => {
    console.error(error)

    toast({
      title: `image upload failed`,
      description: `Your img could not be uploaded. Please try again.`,
      variant: "destructive",
    });
  };

  const onSuccess = (res: any) => {
    setFile(res);
    onFileChange(res.filePath);

    toast({
      title: "Image Uploaded successfully",
      description: `${res.filePath} uploaded successfully!`,
    })
  };

  const [file, setFile] = useState<{ filePath: string } | null>(null);

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        className="hidden"
        ref={ref}
        onError={onError}
        onSuccess={onSuccess}
        fileName="test-upload.png"
      ></IKUpload>

      <button
        className="upload-btn"
        onClick={(e) => {
          e.preventDefault();

          if (ref.current) {
            //@ts-ignore
            ref.current?.click();
          }
        }}
      >
        <Image
          src="/icons/upload.svg"
          alt="upload-icon"
          width={20}
          height={20}
          className="object-contain"
        />

        <p className={"text-base"}>Upload file</p>

        {file && <p className="upload-filename">{file.filePath}</p>}
      </button>

      {file && (
        <IKImage
          alt={file.filePath}
          path={file.filePath}
          width={500}
          height={500}
        ></IKImage>
      )}
    </ImageKitProvider>
  );
};

export default FileUpload;
