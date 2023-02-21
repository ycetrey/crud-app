export const stringFormatter = (mask: string, num: number): string => {
  let formatted = ''
  let control = 0

  const convertedNum = num?.toString()

  if (num) {
    Array.from(mask).forEach((maskChar) => {
      if (maskChar === '0') {
        formatted += convertedNum[control]
        control++
      } else {
        formatted += maskChar
      }
    })
  }
  return formatted
}
