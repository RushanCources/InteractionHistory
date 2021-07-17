import {StyleSheet} from 'react-native';

const WHITE = '#fff';
const BLUE = '#337ab7';
const DARK_BLUE = '#183147';

const stylesMain = StyleSheet.create({
  containerDarkBlue: {
    flex: 1,
		paddingVertical: 30,
    paddingHorizontal: 10,
    backgroundColor: DARK_BLUE,
  },
  containerWhite: {
    flex: 1,
    padding: 20,
    backgroundColor: WHITE,
  },
  containerVerticalCenter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
	itemContainerWhite: {
    marginBottom: 10,
		paddingVertical: 15,
		paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: WHITE
	},
  itemContainerBorderLeftDarkBlue: {
    marginBottom: 10,
    paddingLeft: 20,
    borderLeftWidth: 5,
    borderLeftColor: DARK_BLUE,
  },
	itemTitleBigDarkBlue: {		
    fontSize: 24,
		color: DARK_BLUE,
	},
	itemTitleSmallBlue: {
		fontSize: 18,
		color: BLUE
	},
	itemDescrBigDarkBlue: {
		fontSize: 24,
		color: DARK_BLUE
	},
	itemDescrSmallDarkBlue: {
		fontSize: 16,
		color: DARK_BLUE
	},
	containerNavTitle: {
		paddingRight: 30,
	},
	stackNavHeaderBigDarkBlue: {
		height: 200,
		backgroundColor: DARK_BLUE,
	},
	navTitle: {
		fontSize: 40,
		textAlign: 'center',
		color: WHITE,
	},
	NavDescr: {
		fontSize: 16,
		textAlign: 'center',
		color: WHITE,
	}
});

export default stylesMain;
