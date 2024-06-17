import type { Metadata } from "next";
import LoginForm from "@/components/auth/LoginForm";
import Container from "@/components/ui/Container";
import { authOption } from "@/lib/next-auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "ورود",
};

export default async function page() {
  const session = await getServerSession(authOption);

  if (session?.user.usreId) redirect("/");

  return (
    <div className="mt-8">
      <Container>
        <LoginForm />
      </Container>
    </div>
  );
}
