import {extendTheme} from 'native-base';

export const theme = extendTheme({
  fontConfig: {
    Nunito: {
      100: {
        normal: 'Nunito-ExtraLight',
        italic: 'Nunito-ExtraLightItalic',
      },
      200: {
        normal: 'Nunito-Light',
        italic: 'Nunito-LightItalic',
      },
      300: {
        normal: 'Nunito-Light',
        italic: 'Nunito-LightItalic',
      },
      400: {
        normal: 'Nunito-Regular',
        italic: 'Nunito-Italic',
      },
      500: {
        normal: 'Nunito-SemiBold',
        italic: 'Nunito-SemiBoldItalic',
      },
      600: {
        normal: 'Nunito-SemiBold',
        italic: 'Nunito-SemiBoldItalic',
      },
      700: {
        normal: 'Nunito-Bold',
        italic: 'Nunito-BoldItalic',
      },
    },
  },

  fonts: {
    heading: 'Nunito',
    body: 'Nunito',
    mono: 'Nunito',
  },
});
