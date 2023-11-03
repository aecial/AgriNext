import prisma from "@/lib/Prisma";
import { NextResponse } from "next/server";
export async function GET(request) {
  const res = await prisma.cropTypes.findMany();
  return NextResponse.json({ crops: res });
}
