"use server";

import { compare, hash } from "bcrypt";
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

export const CheckUserInputs = async (formdata: FormData) => {
  try {
    const { email, password } = Object.fromEntries(formdata);

    const user = await prismadb.user.findUnique({
      where: {
        email: email as string,
      },
    });

    if (!user) {
      return { success: false, message: "Invalid credentials" };
    }

    const passwordMatches = await compare(
      password as string,
      user.hashedPassword
    );

    if (passwordMatches) {
      return { success: true };
    } else {
      return { success: false, message: "Invalid credentials" };
    }

    return { success: true };
  } catch (error) {
    console.log("CheckUserEmail", error);
  }
};
