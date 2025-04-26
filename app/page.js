import WeatherDashboard from "../components/weather-dashboard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-blue-950 p-4 md:p-8">
      <WeatherDashboard />
    </main>
  )
}
