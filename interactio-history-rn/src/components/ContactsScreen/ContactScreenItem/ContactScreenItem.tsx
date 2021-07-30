import React, { useCallback } from 'react';
import navigation from '../../../navigation/navigation'
import { useDispatch } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import ContactNameBlock from '../../common/ContactNameBlock/ContactNameBlock';
import { TContactsListState } from '../../../store/type';
import { setCurrentId } from '../../../store/slice';
import stylesMain from '../../../styles.global'

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
        <ContactNameBlock
          item={item.item}
          styleContainer={stylesMain.itemContainerWhite}
          styleRow={stylesMain.containerRow}
          styleTitle={stylesMain.itemTitleBigDarkBlue}
          styleDescr={stylesMain.itemDescrSmallDarkBlue}
        />
      </TouchableOpacity >
    )
  }, [])

  return (
    <SafeAreaView>
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