import Image from "next/image";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import Table from "@mui/joy/Table";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1>Landing Page</h1>
      <Link href="/login">Login</Link>
    </main>
  );
}
