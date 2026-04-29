import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"

// In production: replace with Supabase query
// import { createClient } from "@/lib/supabase/server"

const DEMO_USER = {
  id: "1",
  email: "demo@vaani.health",
  // bcrypt hash of "demo1234"
  passwordHash: "$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy",
  role: "doctor",
}

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password required" }, { status: 400 })
    }

    // TODO: Replace with real DB lookup
    // const supabase = createClient()
    // const { data: user } = await supabase.from("users").select().eq("email", email).single()

    // Demo mode: accept any email with password "demo1234"
    const passwordMatch = password === "demo1234" || await bcrypt.compare(password, DEMO_USER.passwordHash)

    if (!passwordMatch) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    return NextResponse.json({
      success: true,
      user: { id: DEMO_USER.id, email, role: DEMO_USER.role },
    })
  } catch (err) {
    console.error("Login error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
