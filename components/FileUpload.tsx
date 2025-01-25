"use client";

import config from "@/lib/config";
import { IKImage, IKUpload, ImageKitContext } from "imagekitio-next";

const authenticator = async () => {
  try {
    const res = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

    if (!res.ok) {
      const errorText = await res.text();

      throw new Error(
        `Request failed with status ${res.status}: ${errorText}`
      );
    }

    const data = await res.json();

    const {signature, expire,token} = data;

    return {signature, expire, token}
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const FileUpload = () => {
  return <div>FileUpload</div>;
};

export default FileUpload;
