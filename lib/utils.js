export function formatDate(timestamp) {
  const date = new Date(timestamp * 1000)
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  return date.toLocaleDateString("en-US", options)
}

export function formatDay(timestamp) {
  const date = new Date(timestamp * 1000)
  return date.toLocaleDateString("en-US", { weekday: "short" })
}
