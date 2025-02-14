"use client";

import { toast } from "@/hooks/use-toast";
import config from "@/lib/config";
import { cn } from "@/lib/utils";
import {
  IKImage,
  IKUpload,
  IKVideo,
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

interface props {
  type : "image" | "video",
  accept: string,
  placeholder : string,
  folder : string,
  variant: string,
  onFileChange: (filePath: string) => void;
}

const FileUpload = ({
  type, accept, placeholder, folder, variant, onFileChange,
}: props) => {
  const {
    env: {
      imagekit: { publicKey, urlEndpoint },
    },
  } = config;

  const ref = useRef(null);

  const [progress, setProgress] = useState(0);

  const styles = {
    button: variant === "dark"? "bg-dark-300" : "bg-light-600 border-gray-100 border",
    placeholder: variant === "dark"? "text-light-100" : "text-slate-500",
    text : variant === "dark" ? "text-light-100" : "text-dark-400",
  }

  const onError = (error : any) => {
    console.error(error)

    toast({
      title: `${type} upload failed`,
      description: `Your img could not be uploaded. Please try again.`,
      variant: "destructive",
    });
  };

  const onSuccess = (res: any) => {
    setFile(res);
    onFileChange(res.filePath);

    toast({
      title: `${type} Uploaded successfully`,
      description: `${res.filePath} uploaded successfully!`,
    })
  };

  const onValidate = (file: File)=>{
    if(type === "image"){
      if(file.size > 20*1024*1024){
        toast({
          title: "File size too large",
          description: " Please upload a file that is less than 20MB in size",
          variant: "destructive"
        })

        return false
      }
    }
    else if(type === "video"){
      if(file.size> 50*1024*1024){
        toast({
          title: "File size too large",
          description: " Please upload a file that is less than 50MB in size",
          variant: "destructive"
        })

        return false
      }
    }

    return true; 
  }

  const [file, setFile] = useState<{ filePath: string } | null>(null);

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        ref={ref}
        onError={onError}
        onSuccess={onSuccess}
        useUniqueFileName= {true}
        validateFile={onValidate}
        onUploadStart={()=>{
          setProgress(0)
        }}
        onUploadProgress={({loaded, total})=>{
          const parcent = Math.round((loaded/total)*100);
          setProgress(parcent)
        }}
        folder={folder}
        accept={accept}
        className="hidden"
      ></IKUpload>

      <button
        className={cn("upload-btn" , styles.button)}
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

        <p className={cn("text-base", styles.placeholder)}>Upload file</p>

        {file && <p className={cn("upload-filename", styles.text)}>{file.filePath}</p>}
      </button>

      {progress > 0 && (
        <div className="w-full rounded-full bg-green-300">
          <div className="progress" style={{width: `${progress}%`}}>
            {progress} %
          </div>
        </div>
      )}

      {file && (
        (
          type=== "image"? (<IKImage
          alt={file.filePath}
          path={file.filePath}
          width={500}
          height={500}
        ></IKImage>):(
          type === "video" ? (<IKVideo
          path={file.filePath}
          controls={true}
          className="h-96 w-full rounded-xl"
          ></IKVideo>): null
        )
      )
        
      )}
    </ImageKitProvider>
  );
};

export default FileUpload;
