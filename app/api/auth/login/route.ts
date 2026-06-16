import { NextResponse } from "next/server";
import { AUTH_COOKIE_NAME } from "@/lib/auth/constants";
import { getApiBaseUrl } from "@/lib/api/config";

interface LoginBody {
  email?: string;
  password?: string;
}

interface ApiLoginResponse {
  success: boolean;
  data?: { accessToken: string };
  message?: string;
}

export async function POST(request: Request) {
  const body = (await request.json()) as LoginBody;

  if (!body.email || !body.password) {
    return NextResponse.json(
      { success: false, message: "Email and password are required." },
      { status: 400 },
    );
  }

  try {
    const backendRes = await fetch(`${getApiBaseUrl()}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: body.email, password: body.password }),
    });

    const payload = (await backendRes.json()) as ApiLoginResponse;

    if (!backendRes.ok || !payload.success || !payload.data?.accessToken) {
      return NextResponse.json(
        {
          success: false,
          message: payload.message ?? "Invalid email or password.",
        },
        { status: 401 },
      );
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set(AUTH_COOKIE_NAME, payload.data.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to reach the authentication server." },
      { status: 503 },
    );
  }
}
