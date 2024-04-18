// import { Buffer } from 'node:buffer'

export const uuidToNumbers = (uuid: string): number[] => {
  return uuid.split('-').map((hex) => parseInt(hex, 16))
}

export const numbersToUuid = (numbers: number[]): string => {
  return numbers
    .map((num, index) =>
      num.toString(16).padStart(index === 0 || index === numbers.length - 1 ? 8 : 4, '0')
    )
    .join('-')
}
