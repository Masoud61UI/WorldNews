"use server";

import { compare, hash } from "bcrypt";
import prismadb from "./prismadb";
import { revalidatePath } from "next/cache";

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
  } catch (error) {
    console.log("CheckUserEmail", error);
  }
};

export const CreatePostAction = async (formData: FormData) => {
  try {
    const { title, body, image } = Object.fromEntries(formData);

    const address = String(title).split(" ").join("-");

    const post = await prismadb.post.create({
      data: {
        title: title as string,
        address,
        body: body as string,
        image: image as string,
      },
    });

    if (!post) return { success: false };

    revalidatePath("/admin");

    return { success: true };
  } catch (error) {
    console.log("CreatePostAction", error);
  }
};

export const DeletePostAction = async (id: number) => {
  try {
    const deletePost = await prismadb.post.delete({
      where: {
        id,
      },
    });

    if (!deletePost) return { success: false };

    revalidatePath("/admin");

    return { success: true };
  } catch (error) {
    console.log("DeletePostAction", error);
  }
};
