import { NextResponse } from "next/server";
import prisma from "@/lib/Prisma";

export async function POST(request) {
  const res = await request.json();
  const { crop_type, image } = res;
  console.log({ res });
  const result = await prisma.cropTypes.create({
    data: { crop_type: crop_type, image: image },
  });
  return NextResponse.json({ data: res });
}
