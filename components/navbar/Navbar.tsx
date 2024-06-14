import { getServerSession } from "next-auth";
import Container from "../ui/Container";
import { authOption } from "@/lib/next-auth";
import UserAvatar from "./userAvatar/UserAvatar";

export default async function Navbar() {
  const session = await getServerSession(authOption);

  return (
    <nav className="border-b py-3">
      <Container isFullHeight className="flex items-center justify-between">
        <div></div>
        <div></div>
        <div className="flex items-center justify-normal gap-x-6">
          <UserAvatar session={session} />
        </div>
      </Container>
    </nav>
  );
}
