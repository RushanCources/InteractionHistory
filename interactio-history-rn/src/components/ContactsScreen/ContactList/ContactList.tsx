import React, { useCallback } from 'react';
import navigation from '../../../navigation/navigation'
import { useDispatch } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, TouchableOpacity, View } from 'react-native';
import ContactNameBlock from '../../common/ContactNameBlock/ContactNameBlock';
import { TContactsListState } from '../../../store/type';
import { setCurrentId } from '../../../store/contactInteractionsSlice';
import stylesMain, { DARK_BLUE } from '../../../styles.global'

const ContactScreenItem = (props: TContactsListState) => {
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
            style={stylesMain.itemImageClient}
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
    <SafeAreaView style={stylesMain.containerPadding} >
      {response && <FlatList
        data={response}
        keyExtractor={(item => item.id)}
        renderItem={renederItem}
      />
      }
    </SafeAreaView>
  );
};

export default ContactScreenItem;