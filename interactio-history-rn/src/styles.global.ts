import {StyleSheet} from 'react-native';

const stylesMain = StyleSheet.create({
  containerDarkBlue: {
    flex: 1,
		paddingVertical: 30,
    paddingHorizontal: 10,
    backgroundColor: '#183147',
  },
  containerWhite: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
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
    backgroundColor: '#fff'
	},
  itemContainerBorderLeftDarkBlue: {
    marginBottom: 10,
    paddingLeft: 20,
    borderLeftWidth: 5,
    borderLeftColor: '#183147',
  },
	itemTitleBigDarkBlue: {		
    fontSize: 24,
		color: '#183147',
	},
	itemTitleSmallBlue: {
		fontSize: 18,
		color: '#337ab7'
	},
	itemDescrBigDarkBlue: {
		fontSize: 24,
		color: '#183147'
	},
	itemDescrSmallDarkBlue: {
		fontSize: 16,
		color: '#183147'
	},
	sectionNavigTitle: {
		paddingRight: 30,
	},
	NavTitle: {
		fontSize: 40,
		textAlign: 'center',
		color: '#fff',
	},
	NavDescr: {
		fontSize: 16,
		textAlign: 'center',
		color: '#fff',
	}
});

export default stylesMain;
