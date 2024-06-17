import type { Metadata } from "next";
import RegisterForm from "@/components/auth/RegisterForm";
import Container from "@/components/ui/Container";
import { authOption } from "@/lib/next-auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "ثبت نام",
};

export default async function page() {
  const session = await getServerSession(authOption);

  if (session?.user.usreId) redirect("/");

  return (
    <div className="mt-20">
      <Container>
        <RegisterForm />
      </Container>
    </div>
  );
}
