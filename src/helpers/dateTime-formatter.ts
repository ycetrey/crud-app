export const dateTimeFormatter = (value: Date) =>
  new Intl.DateTimeFormat('pt-br', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/Denver',
  }).format(new Date(value))
