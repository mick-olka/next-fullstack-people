import { v } from './variables'

export interface ITheme {
  textPrimary?: string
  bodyBg?: string
  bg?: string
  bg2?: string
  primary?: string
  popupBg?: string
  bgPrimary?: string
  bgSec?: string
  dividerBg?: string
  textWhite?: string
  longDividerBg?: string
  lightGrayBg?: string
  inputBg?: string
  buttonPrimary?: string
}

export const lightTheme = {}

export const darkTheme = {}

export const defaultTheme: ITheme = {
  textPrimary: v.textBlack,
  textWhite: v.textWhite,
  bodyBg: v.bgBlackTransparent,
  bgPrimary: v.bgWhite,
  bgSec: v.bgGray,
  primary: v.black,
  popupBg: v.bgBlackTransparent,
  dividerBg: v.smoothGray,
  longDividerBg: v.borderGray,
  lightGrayBg: v.bgLightGray,
  inputBg: v.bgWhite,
  buttonPrimary: v.blue,
}
