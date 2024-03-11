import type { Theme } from './types'

// Primary color
export const concrete = {
  DEFAULT: '#F2F2F2',
  50: '#FFFFFF',
  100: '#FFFFFF',
  200: '#FFFFFF',
  300: '#FFFFFF',
  400: '#FFFFFF',
  500: '#F2F2F2',
  600: '#D6D6D6',
  700: '#BABABA',
  800: '#9E9E9E',
  900: '#828282',
  950: '#747474',
}

// Secondary color
export const purplePizzazz = {
  DEFAULT: '#F205E2',
  50: '#FDB1F8',
  100: '#FD9DF7',
  200: '#FC75F3',
  300: '#FB4DF0',
  400: '#FB25EC',
  500: '#F205E2',
  600: '#BB04AF',
  700: '#84037B',
  800: '#4D0248',
  900: '#160015',
  950: '#000000',
}

// Accent color
export const scienceBlue = {
  DEFAULT: '#0B64D9',
  50: '#A1C8FA',
  100: '#8EBCF9',
  200: '#67A5F7',
  300: '#408EF5',
  400: '#1978F3',
  500: '#0B64D9',
  600: '#084BA4',
  700: '#06336E',
  800: '#031A39',
  900: '#000203',
  950: '#000000',
}

// Neutral color
export const silver = {
  DEFAULT: '#BFBFBF',
  50: '#FFFFFF',
  100: '#FFFFFF',
  200: '#FCFCFC',
  300: '#E8E8E8',
  400: '#D3D3D3',
  500: '#BFBFBF',
  600: '#A3A3A3',
  700: '#878787',
  800: '#6B6B6B',
  900: '#4F4F4F',
  950: '#414141',
}

// Success color
export const screaminGreen = {
  DEFAULT: '#44F24F',
  50: '#F0FEF1',
  100: '#DDFDDF',
  200: '#B6FABB',
  300: '#90F797',
  400: '#6AF573',
  500: '#44F24F',
  600: '#11ED1E',
  700: '#0DB918',
  800: '#098411',
  900: '#06500A',
  950: '#043607',
}

// Info color
export const malibu = {
  DEFAULT: '#66B3FF',
  50: '#FFFFFF',
  100: '#FFFFFF',
  200: '#E0F0FF',
  300: '#B8DCFF',
  400: '#8FC7FF',
  500: '#66B3FF',
  600: '#2E97FF',
  700: '#007BF5',
  800: '#005FBD',
  900: '#004385',
  950: '#003569',
}

// Warn color
export const starship = {
  DEFAULT: '#EDF25C',
  50: '#FFFFFF',
  100: '#FEFEF3',
  200: '#FAFBCD',
  300: '#F5F8A8',
  400: '#F1F582',
  500: '#EDF25C',
  600: '#E7EE28',
  700: '#C7CD10',
  800: '#95990C',
  900: '#626608',
  950: '#494C06',
}

// Danger color
export const redRibbon = {
  DEFAULT: '#F20530',
  50: '#FDB1BF',
  100: '#FD9DAF',
  200: '#FC758E',
  300: '#FB4D6D',
  400: '#FB254C',
  500: '#F20530',
  600: '#BB0425',
  700: '#84031A',
  800: '#4D020F',
  900: '#160004',
  950: '#000000',
}

export const colorPalette: Theme['colors'] = {
  primary: concrete,
  secondary: purplePizzazz,
  accent: scienceBlue,
  neutral: silver,
  success: screaminGreen,
  info: malibu,
  warn: starship,
  danger: redRibbon,
  base: {
    50: '#e6e6e9',
    100: '#ceced4',
    200: '#9c9da8',
    300: '#6b6b7d',
    400: '#393a51',
    500: '#080926',
    600: '#06071e',
    700: '#050517',
    800: '#03040f',
    900: '#020208',
    DEFAULT: '#080926',
  },
  // Add colors with their names
  concrete,
  purplePizzazz,
  scienceBlue,
  silver,
  screaminGreen,
  malibu,
  redRibbon,
  starship,
  consoleGreen: {
    DEFAULT: '#00DD00',
    50: '#96FF96',
    100: '#81FF81',
    200: '#58FF58',
    300: '#30FF30',
    400: '#07FF07',
    500: '#00DD00',
    600: '#00A500',
    700: '#006D00',
    800: '#003500',
    900: '#000000',
    950: '#000000',
  },
}
