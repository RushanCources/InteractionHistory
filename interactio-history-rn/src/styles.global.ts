import { StyleSheet } from "react-native";

export const WHITE = "#fff";
export const GREY = "#dcdcdc";
export const BLUE = "#337ab7";
export const DARK_BLUE = "#103552";

const stylesMain = StyleSheet.create({
  mt10: {
    marginTop: 10,
  },
  mt60: {
    marginTop: 60,
  },
  mr15: {
    marginRight: 15,
  },
  mb20: {
    marginBottom: 20,
  },
  pr150: {
    paddingRight: 150,
  },
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  containerPadding: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  containerWhite: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: WHITE,
  },
  containerDarkBlue: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: DARK_BLUE,
  },
  containerRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
  },
  containerRowCenter: {
    flexDirection: "row",
    justifyContent: "center",
  },
  containerVerticalCenter: {
    justifyContent: "space-around",
    padding: 10,
  },
  containerNavTitle: {
    paddingRight: 30,
  },
  navTitle: {
    fontSize: 36,
    fontWeight: '700',
    textAlign: "center",
    color: WHITE,
  },
  NavDescr: {
    fontSize: 16,
    textAlign: "center",
    color: WHITE,
  },
  stackNavHeaderBigDarkBlue: {
    height: 150,
    backgroundColor: DARK_BLUE,
  },
  navHeaderSmall: {
    height: 80,
  },
  navHeaderSmallDarkBlue: {
    height: 70,
    backgroundColor: DARK_BLUE,
  },
  itemContainerWhite: {
    marginBottom: 10,
    paddingVertical: 15,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    backgroundColor: WHITE,
  },
  itemContainerBorderLeftDarkBlue: {
    marginBottom: 10,
    paddingLeft: 20,
    borderLeftWidth: 5,
    borderLeftColor: DARK_BLUE,
  },
  itemContainerBorderDown: {
    marginBottom: 15,
    marginHorizontal: 20,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderColor: GREY,
  },
  itemTitleBigDarkBlue: {
    fontSize: 28,
    color: DARK_BLUE,
  },
  itemTitleSmallBlue: {
    fontSize: 18,
    color: BLUE,
  },
  itemDescrBigDarkBlue: {
    fontSize: 24,
    color: DARK_BLUE,
  },
  itemDescrMediumDarkBlue: {
    fontSize: 20,
    color: DARK_BLUE,
  },
  itemDescrSmallDarkBlue: {
    fontSize: 16,
    color: DARK_BLUE,
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  itemImageClient: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: DARK_BLUE,
  },
  itemImageComMethod: {
    marginRight: 15,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: DARK_BLUE,
  },
  absoluteRitghtBlock: {
    position: "absolute",
    top: "50%",
    right: 20,
  },
  itemTime: {
    fontSize: 18,
    color: BLUE,
  },
  titleBigWhite: {
    fontSize: 40,
    fontWeight: "700",
    color: WHITE,
  },
  titleMediumWhite: {
    color: 'white',
    fontWeight: '700',
    fontSize: 32,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: '700',
    color: DARK_BLUE,
    backgroundColor: WHITE,
  },
  iconComMethod: {
    width: 50,
    height: 50,
  },
});

export default stylesMain;
