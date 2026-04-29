import { NextRequest, NextResponse } from "next/server"

// Demo patient data — replace with Supabase query
const DEMO_PATIENTS = [
  { id: "1", name: "Arjun Sharma", age: 45, condition: "Hypertension", lastVisit: "2026-04-20" },
  { id: "2", name: "Priya Nair", age: 32, condition: "Diabetes Type 2", lastVisit: "2026-04-25" },
  { id: "3", name: "Ravi Kumar", age: 60, condition: "Arthritis", lastVisit: "2026-04-27" },
]

export async function GET(req: NextRequest) {
  try {
    // TODO: Replace with Supabase query
    // const supabase = createClient()
    // const { data, error } = await supabase.from("patients").select("*")

    return NextResponse.json({ patients: DEMO_PATIENTS })
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch patients" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, age, condition } = body

    if (!name || !age) {
      return NextResponse.json({ error: "Name and age required" }, { status: 400 })
    }

    // TODO: Insert into Supabase
    const newPatient = { id: Date.now().toString(), name, age, condition, lastVisit: new Date().toISOString().split("T")[0] }

    return NextResponse.json({ patient: newPatient }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: "Failed to create patient" }, { status: 500 })
  }
}
