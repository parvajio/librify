import ImageKit from "imagekit";
import dummyBooks from "../dummybooks.json";
import { books } from "./schema";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { config } from "dotenv";

config({path: ".env.local"});

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({client : sql})


const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY!
})

const uploadToImagekit = async (url: string, fileName: string, folder: string) => {
    try {
        const response = await imagekit.upload({ file : url,fileName, folder})

        return response.filePath;
    } catch (error) {
        console.error("Error uploading image to Imagekit", error);
    }
}

const seed = async () => {
    console.log("seeding data....");

    try {
        for (const book of dummyBooks) {
            const coverUrl = await uploadToImagekit(book.coverUrl, `${book.title}.jpg`, "/books/covers")

            const videoUrl = await uploadToImagekit(book.videoUrl, `${book.title}.jpg`, "/books/trailer")

            await db.insert(books).values({
                ...book,
                coverUrl,
                videoUrl
            })
        }

        console.log("data seeded successfully");
    } catch (err) {
        console.error(err)
        // return {success: false, messag}
    }
}

seed();