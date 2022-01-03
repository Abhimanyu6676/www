interface notification_i {
  title: string
  subtitle?: string
  id: string
  type: "ALERT" | "SUCCESS" | "WARNING"
}
