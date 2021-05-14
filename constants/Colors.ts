const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
const Red = '#E60F0F';
const OffWhite = '#F8F8FF';
const Blue = '#2200e4eb';
const DarkGrey = '#5d5d5d';

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
  OffWhite:{
    color: OffWhite,
    Transparent: 'rgba(248, 248, 255, 0.98)',
    Faint: 'rgba(248, 248, 255, 0.50)'
  },
  Red:{
    color: Red,
    Transparent: 'rgba(230, 15, 15, 0.98)',
    CircleTransparent: 'rgba(230, 15, 15, 0.80)'
  },
  Blue:{
    color: Blue,
    Transparent: 'rgba(34, 0, 228, 0.92)',
    CircleTransparent: 'rgba(34, 0, 228, 0.80)'
  },
  DarkGrey:{
    color: DarkGrey,
    Transparent: 'rgba(93, 93, 93, 0.75)'
  }
};
