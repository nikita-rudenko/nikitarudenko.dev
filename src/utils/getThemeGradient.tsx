import { TThemeVariants } from '@typings/themeTypes'

function getThemeGradient(theme: TThemeVariants | ''): string | false {
  return theme && `gradient-${theme}`
}

export default getThemeGradient
