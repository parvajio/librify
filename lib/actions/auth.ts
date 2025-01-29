"use server"

import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { hash } from "bcryptjs";
import { eq } from "drizzle-orm";

const signup = async (params: AuthCredentials) =>{
    const {fullName, email, universityId, universityCard, password} = params;

    const existingUser= await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1)

    if(existingUser.length > 0){
        return {success: false, error : "user already exist "}
    }

    const hashedPassword = await hash(password, 10)

    try{
        await db.insert(users).values({
            fullName,
            email,
            universityId,
            password= hashedPassword,
            universityCard
        });

        // await signInWithCredentials({email, password})

        return {success :true}
    }catch(err){
        console.log(err, "sign up error")
        return {success: false, error: "signup error"}
    }
}