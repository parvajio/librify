"use client";

import { IKImage, IKUpload, ImageKitContext } from "imagekitio-next";

const authenticator = async() =>{
  try {

    
  }catch(error: any){
    throw new Error(`Authentication request failed: ${error.message}`);
  }
}

const FileUpload = () => {
  return (
    <div>FileUpload</div>
  )
}

export default FileUpload