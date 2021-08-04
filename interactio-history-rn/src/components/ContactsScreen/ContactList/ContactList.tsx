import React, { useCallback, useEffect, useRef } from 'react';
import navigation from '../../../navigation/navigation'
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, TouchableOpacity, View, Text, Animated } from 'react-native';
import ContactNameBlock from '../../common/ContactNameBlock/ContactNameBlock';
import { TContactsListState } from '../../../store/type';
import { setCurrentId } from '../../../store/slice/contactInteractionsSlice';
import stylesMain from '../../../styles.global'

const ContactList = (props: TContactsListState) => {
  const transformY = useRef(
    new Animated.Value(70)
  ).current
  const opacity = useRef(
    new Animated.Value(0)
  ).current

  useEffect(() => {
    Animated.timing(transformY, {
      toValue: 0,
      delay: 300,
      useNativeDriver: true,
    }).start()
    Animated.timing(opacity, {
      toValue: 1,
      delay: 300,
      useNativeDriver: true,
    }).start()
  }, [])

  const dispatch = useDispatch()

  const { response } = props

  const renederItem = useCallback(item => {
    return (
      <TouchableOpacity
        onPress={() => {
          dispatch(setCurrentId(item.item.id))
          navigation.navigate('ContactInformationScreen')
        }}>
        <View style={[stylesMain.itemContainerWhite, stylesMain.containerRow]}>
          <Image
            source={require('../../../img/img-client.png')}
            style={[stylesMain.itemImageClient, stylesMain.mr15,]}
          />
          <ContactNameBlock
            item={item.item}
            styleRow={stylesMain.containerRow}
            styleTitle={stylesMain.itemTitleBigDarkBlue}
            styleDescr={stylesMain.itemDescrSmallDarkBlue}
          />
        </View>
      </TouchableOpacity >
    )
  }, [])

  return (
    <SafeAreaView style={stylesMain.containerPadding}>
      <Animated.View style={[{ opacity: opacity }, stylesMain.containerRow, stylesMain.containerVerticalCenter, stylesMain.mb20]}>
        <Text style={[stylesMain.titleBigWhite]}>Contacts</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RecentsScreen')
          }}
        >
          <Text style={[stylesMain.btn, stylesMain.mt10]}>Recents</Text>
        </TouchableOpacity>
      </Animated.View>
      {response && <Animated.FlatList
        style={{
          transform: [{ translateY: transformY }],
          opacity: opacity,
        }}
        data={response}
        renderItem={renederItem}
      />
      }
    </SafeAreaView>
  );
};

export default ContactList;