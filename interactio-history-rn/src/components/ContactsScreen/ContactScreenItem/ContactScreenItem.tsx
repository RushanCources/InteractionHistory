import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { dataContactContext } from '../../../context/dataContactContext'
import useContactData from '../../../hooks/useContactData';
import navigation from '../../../navigation/navigation'
import ContactNameBlock from '../../common/ContactNameBlock/ContactNameBlock';
import stylesMain from '../../../styles.global'
import { setCurrentId } from '../../../store/slice';
import { useDispatch } from 'react-redux';

interface IContactScreenItemProps {
  item: {
    id: string,
    firstName: string,
    jobTitle: string,
    lastName: string,
    account: {
      name: string
      title: string
    }
  }
}

const ContactScreenItem = ({ item }: IContactScreenItemProps) => {
  const { toggleDataContact } = useContext(dataContactContext)
  const [{ ContactData }] = useContactData(item.id)
  const dispatch = useDispatch()

  return (
    <TouchableOpacity
      onPress={() => {
        toggleDataContact(ContactData)
        dispatch(setCurrentId(item.id))
        navigation.navigate('ContactInformationScreen')
      }}>
        <ContactNameBlock
          item={item}
          styleContainer={stylesMain.itemContainerWhite}
          styleRow={stylesMain.containerRow}
          styleTitle={stylesMain.itemTitleBigDarkBlue}
          styleDescr={stylesMain.itemDescrSmallDarkBlue}
        />
    </TouchableOpacity >
  );
};

export default ContactScreenItem;