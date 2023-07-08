export function getDayClassName(value) {
  if (value < 7) {
    return ['color--danger']
  } else if (value < 30) {
    return ['color--warning']
  } else {
    return ['color--success']
  }
}
