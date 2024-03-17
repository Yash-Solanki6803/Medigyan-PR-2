import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
// GET SINGLE POST
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");
  try {
    const medicine = await prisma.medicine.findUnique({
      where: { medicine_name: name },
    });
    console.log(medicine);
    return new NextResponse(JSON.stringify(medicine, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

// CREATE A POST
export const POST = async (req) => {
  try {
    const body = await req.json();
    const post = await prisma.medicine.create({
      data: { ...body },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify(
        { message: "Something really went wrong!" },
        { status: 500 }
      )
    );
  }
};
