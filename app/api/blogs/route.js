import connectMongoDB from "../../../libs/mongodb";
import Blog from "../../../model/blog";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();
    const blogs = await Blog.find();
    return NextResponse.json({ blogs });
  } catch (error) {
    console.error("Error fetching blogs:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
