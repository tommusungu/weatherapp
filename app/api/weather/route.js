import { NextResponse } from "next/server"

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const city = searchParams.get("city")
  const units = searchParams.get("units") || "metric"

  if (!city) {
    return NextResponse.json({ error: "City parameter is required" }, { status: 400 })
  }

  try {
    const apiKey = process.env.OPENWEATHER_API_KEY
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`,
    )

    if (!response.ok) {
      const errorData = await response.json()
      return NextResponse.json(
        { error: errorData.message || "Failed to fetch weather data" },
        { status: response.status },
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching weather data:", error)
    return NextResponse.json({ error: "Failed to fetch weather data" }, { status: 500 })
  }
}
