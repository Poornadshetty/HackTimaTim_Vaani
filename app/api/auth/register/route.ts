import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"

export async function POST(req: NextRequest) {
  try {
    const { email, password, name, role } = await req.json()

    if (!email || !password || !name) {
      return NextResponse.json({ error: "Name, email and password required" }, { status: 400 })
    }
    if (password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters" }, { status: 400 })
    }

    const passwordHash = await bcrypt.hash(password, 10)

    // TODO: Replace with real Supabase insert
    // const supabase = createClient()
    // const { data, error } = await supabase.from("users").insert({ email, password_hash: passwordHash, name, role })

    console.log("New user would be created:", { email, name, role, passwordHash })

    return NextResponse.json({ success: true, message: "User registered (demo mode)" })
  } catch (err) {
    console.error("Register error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
