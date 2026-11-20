import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Contact } from "@/models/Contact";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, companyName, email, phone, service, message, source } = body;

    if (!fullName || !email || !service || !message) {
      return NextResponse.json(
        { error: "Full name, email, service, and message are required." },
        { status: 400 }
      );
    }

    await connectDB();

    const newContact = await Contact.create({
      fullName,
      companyName,
      email,
      phone,
      service,
      message,
      source: source || "contact_page",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully!",
        data: newContact,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating contact submission:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to submit contact enquiry." },
      { status: 500 }
    );
  }
}
