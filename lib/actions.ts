"use server";

import { hash } from "bcrypt";
import prismadb from "./prismadb";

export const CreateUserAction = async (formData: FormData) => {
  try {
    const { name, email, password } = Object.fromEntries(formData);

    const hashedPassword = await hash(password as string, 12);

    const user = await prismadb.user.create({
      data: {
        name: name as string,
        email: email as string,
        hashedPassword,
      },
    });

    if (!user) return { success: false };

    return { success: true };
  } catch (error) {
    console.log("CreateUserAction", error);
  }
};
