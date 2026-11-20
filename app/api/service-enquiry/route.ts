import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { ServiceEnquiry } from "@/models/ServiceEnquiry";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, companyName, email, phone, service, message } = body;

    if (!fullName || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: "Full name, email, phone, service, and message are required." },
        { status: 400 }
      );
    }

    await connectDB();

    const newEnquiry = await ServiceEnquiry.create({
      fullName,
      companyName,
      email,
      phone,
      service,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Service enquiry received successfully!",
        data: newEnquiry,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating service enquiry:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to submit service enquiry." },
      { status: 500 }
    );
  }
}
