"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function VaaniApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Login failed")
      setIsLoggedIn(true)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <div className="text-3xl font-bold text-teal-600 mb-1">🩺 Vaani</div>
            <CardTitle>Healthcare Platform</CardTitle>
            <CardDescription>Sign in to manage your healthcare</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="doctor@hospital.com" required />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700" disabled={loading}>
                {loading ? "Signing in..." : "Sign In"}
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Demo: use any email + password "demo1234"
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-teal-600">🩺 Vaani</span>
          <Badge variant="secondary">Healthcare</Badge>
        </div>
        <Button variant="outline" onClick={() => setIsLoggedIn(false)}>Sign Out</Button>
      </header>
      <main className="max-w-5xl mx-auto p-6">
        <Tabs defaultValue="dashboard">
          <TabsList className="mb-6">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="patients">Patients</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { label: "Total Patients", value: "1,240", color: "text-teal-600" },
                { label: "Today's Appointments", value: "18", color: "text-blue-600" },
                { label: "Pending Reports", value: "5", color: "text-orange-500" },
              ].map(stat => (
                <Card key={stat.label}>
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className={`text-3xl font-bold mt-1 ${stat.color}`}>{stat.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card>
              <CardHeader><CardTitle>Welcome back!</CardTitle><CardDescription>Here is your daily summary.</CardDescription></CardHeader>
              <CardContent><p className="text-sm text-muted-foreground">Your next appointment is at 10:00 AM with Patient #1034.</p></CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="patients">
            <Card>
              <CardHeader><CardTitle>Patient Records</CardTitle><CardDescription>Manage and view patient data</CardDescription></CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Connect your Supabase database to load real patient records.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="appointments">
            <Card>
              <CardHeader><CardTitle>Appointments</CardTitle><CardDescription>Schedule and manage appointments</CardDescription></CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Connect your Supabase database to manage appointments.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
