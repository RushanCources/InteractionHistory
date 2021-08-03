import React, { useCallback } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, View, Text } from 'react-native';
import { TContactsRecentsState } from '../../../store/type';
import stylesMain from '../../../styles.global'
import { useSelector } from 'react-redux';
import { getContactsListResponse } from '../../../store/selectors';
import ContactNameBlock from '../../common/ContactNameBlock/ContactNameBlock';

const RecentsList = (props: TContactsRecentsState) => {
  const { response: recordsList } = props;
  const { response: contactsList } = useSelector(getContactsListResponse);

  const sortRecordsList = [...recordsList].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return +dateB - +dateA
  })

  const renederItem = useCallback(item => {
    return (
      <TouchableOpacity
        onPress={() => {
        }}>
        <View style={[stylesMain.itemContainerWhite, stylesMain.pr150]}>
          <ContactNameBlock
            item={contactsList.find(obg => obg.id === item.item.contact_id) || {}}
            styleRow={[stylesMain.containerRow]}
            styleTitle={stylesMain.itemTitleSmallBlue}
            styleDescr={stylesMain.itemDescrSmallDarkBlue}
          />
          <Text style={[stylesMain.itemDescrMediumDarkBlue, stylesMain.mt10]}>{item.item.description}</Text>
          <View style={stylesMain.absoluteRitghtBlock}>
            <Text style={stylesMain.itemTime}>{getlastData(item.item.date)}</Text>
          </View>
        </View>
      </TouchableOpacity >
    )
  }, [])

  return (
    <SafeAreaView style={[stylesMain.containerPadding, stylesMain.mt60]} >
      {recordsList && <FlatList
        data={sortRecordsList}
        keyExtractor={(item => item.id)}
        renderItem={renederItem}
      />
      }
    </SafeAreaView>
  );
};

export default RecentsList;

function getlastData(date: string): string {
  const DAY_TIME_MILLISECOND = 8.64e7

  const millseconds = new Date(date).getTime()
  const pasteTime = Date.now() - millseconds;

  const year = new Date(millseconds).getFullYear()
  const month = new Date(millseconds).getMonth() + 1
  const dayOfMonth = new Date(millseconds).getDate()
  const dayOfWeek: string = new Date(millseconds).getDay() + ''
  const hours = new Date(millseconds).getHours()
  const minutes = new Date(millseconds).getMinutes()

  interface IVocabularyDayOfWeek {
    [key: string]: string;
  }

  const vocabularyDayOfWeek: IVocabularyDayOfWeek = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Sunday',
  }

  if (pasteTime < DAY_TIME_MILLISECOND) {
    return `${hours}:${minutes}}`
  } else if (pasteTime < 2 * DAY_TIME_MILLISECOND) {
    return 'Yesterday'
  } else if (pasteTime < 7 * DAY_TIME_MILLISECOND) {
    return vocabularyDayOfWeek[dayOfWeek]
  } else {
    return `${dayOfMonth}/${month}/${year}`
  }
}