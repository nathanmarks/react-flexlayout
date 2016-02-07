import Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import Spacing from 'material-ui/lib/styles/spacing';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

/*
 *  Light Theme is the default theme used in material-ui. It is guaranteed to
 *  have all theme variables needed for every component. Variables not defined
 *  in a custom theme will default to these values.
 */

const spacing = Spacing;
const palette = {
  primary1Color: Colors.blue500,
  primary2Color: Colors.blue700,
  primary3Color: Colors.lightBlack,
  accent1Color: Colors.pinkA200,
  accent2Color: Colors.grey100,
  accent3Color: Colors.grey500,
  textColor: Colors.grey900,
  alternateTextColor: Colors.white,
  canvasColor: Colors.white,
  borderColor: Colors.grey300,
  disabledColor: ColorManipulator.fade(Colors.grey900, 0.3)
};

let muiTheme = {
  fontFamily: 'Roboto, sans-serif',
  palette,
  spacing
};

muiTheme = ThemeDecorator(ThemeManager.getMuiTheme(muiTheme, {
  checkbox: {
    boxColor: Colors.grey600
  }
}));

export { palette };
export default muiTheme;
