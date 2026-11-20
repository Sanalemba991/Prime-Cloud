import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    const envUsername = process.env.ADMIN_USERNAME || "admin";
    const envPassword = process.env.ADMIN_PASSWORD || "admin123";

    const trimmedUsername = (username || "").trim();

    // Check credentials: username and password
    const usernameMatches = trimmedUsername.toLowerCase() === envUsername.toLowerCase();
    const passwordMatches = (password || "") === envPassword;

    if (!usernameMatches || !passwordMatches) {
      return NextResponse.json(
        { error: "Invalid username or password." },
        { status: 401 }
      );
    }

    // Set an HTTP-only session cookie for admin
    const response = NextResponse.json({ success: true, message: "Logged in successfully" });
    response.cookies.set("admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { error: "Authentication failed. " + (error?.message || "") },
      { status: 500 }
    );
  }
}
