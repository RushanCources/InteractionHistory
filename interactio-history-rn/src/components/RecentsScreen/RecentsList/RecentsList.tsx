import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity, View, Text, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TContactsRecentsState } from '../../../store/type';
import { getContactsListResponse } from '../../../store/selectors';
import ContactNameBlock from '../../common/ContactNameBlock/ContactNameBlock';
import stylesMain from '../../../styles.global'

const RecentsList = (props: TContactsRecentsState) => {
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

  const { response: recordsList } = props;
  const { response: contactsList } = useSelector(getContactsListResponse);

  const sortRecordsList = [...recordsList].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return +dateB - +dateA
  })

  const renederItem = useCallback(item => {
    if (item.item.contact_id) {
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
            <Text style={[stylesMain.itemDescrMediumDarkBlue, stylesMain.mt10]}>{item.item.description || "unknow"}</Text>
            <View style={stylesMain.absoluteRitghtBlock}>
              <Text style={stylesMain.itemTime}>
                {
                  (item.item.date) ? getlastData(item.item.date) : "unknow"
                }
              </Text>
            </View>
          </View>
        </TouchableOpacity >
      )
    } else {
      return null;
    }
  }, [])

  return (
    <SafeAreaView style={[stylesMain.containerPadding, stylesMain.mt60]} >
      {recordsList && <Animated.FlatList
        style={{
          transform: [{ translateY: transformY }],
          opacity: opacity,
        }}
        data={sortRecordsList}
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
    return `${hours}:${minutes}`
  } else if (pasteTime < 2 * DAY_TIME_MILLISECOND) {
    return 'Yesterday'
  } else if (pasteTime < 7 * DAY_TIME_MILLISECOND) {
    return vocabularyDayOfWeek[dayOfWeek]
  } else {
    return `${dayOfMonth}/${month}/${year}`
  }
}