export const v = {
  // navbar width
  navbarWidth: 240,

  // Font family

  smSpacing: '8px',
  mdSpacing: '16px',
  lgSpacing: '32px',
  xlSpacing: '48px',
  xxlSpacing: '64px',

  //FontSize
  smFontSize: '8px',
  standardFontSize: '14px',
  mdFontSize: '16px',
  lgSemiFontSize: '24px',
  lgFontSize: '36px',
  xlFontSize: '48px',
  xxlFontSize: '64px',

  //mobile-fontSize
  mobileSmFontSize: '6px',
  mobileStandardFontSize: '12px',
  mobileMdFontSize: '14px',
  mobileSemiLgFontSize: '18px',
  mobileLgFontSize: '22px',
  mobileXlFontSize: '46px',
  mobileXxlFontSize: '62px',

  // Font Weight
  fontWeightThin: 100,
  fontWeightExtraLight: 200,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  fontWeightExtraBold: 800,
  fontWeightBlack: 900,

  //Color styles
  textWhite: '#FFFFFF',
  textBlack: '#181818',
  textDarkBlue: '#061632',
  black: '#181818',
  bgWhite: '#FFFFFF',
  bgLightGray: '#F3F3F4',
  bgGray: '#E5E5E5',
  smoothGray: '#EEEEEE',
  bgBlackTransparent: 'rgba(0,0,0,0.4)',
  bgLightBlue: '#E4FFFD',
  borderGray: '#E8E8E8',
  blue: '#1976d2',
}

export const s = {
  // 1920px = 120em
  full: '120em',
  // 1600px = 100em
  xxxl: '100em',
  // 1400px = 87.5em
  xxl: '87.5em',
  // 1200 px = 75em
  xl: '75em',
  //1000px = 62.5em
  lg: '62.5em',
  //800px = 50em
  md: '50em',
  // 600px = 37.5em
  sm: '37.5em',
  // 400px = 25em
  s: '25em',
  // 320px = 20em
  ss: '20em',
}

// BREAKPOINTS
export const b = {
  full: `(max-width: ${s.full})`,
  xxxl: `(max-width: ${s.xxxl})`,
  xxl: `(max-width: ${s.xxl})`,
  xl: `(max-width: ${s.xl})`,
  lg: `(max-width: ${s.lg})`,
  md: `(max-width: ${s.md})`,
  sm: `(max-width: ${s.sm})`,
  s: `(max-width: ${s.s})`,
  ss: `(max-width: ${s.ss})`,
}
