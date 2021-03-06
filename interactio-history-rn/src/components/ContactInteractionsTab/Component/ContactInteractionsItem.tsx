import React, {useCallback} from 'react';
import {FlatList, SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {TState} from '../../../store/type';

import stylesMain from '../../../styles.global';

const ContactInteractionsTabItem = (props: TState) => {
  const {response} = props;
  const typeInteraction = new Map([
    ['1', 'incoming'],
    ['2', 'outgoing'],
  ]);
  const renederItem = useCallback(item => {
    return (
      <View style={stylesMain.itemContainerBorderLeftDarkBlue}>
        <Text style={stylesMain.itemTitleSmallBlue}>
          {new Date(item.item.date).toLocaleString()}
        </Text>
        <Text style={stylesMain.itemTitleSmallBlue}>{`${typeInteraction.get(
          item.item.type.id.toString(),
        )} ${item.item.type.name}`}</Text>
        <Text style={stylesMain.itemDescrBigDarkBlue}>
          {item.item.description}
        </Text>
      </View>
    );
  }, []);

  return (
    <SafeAreaView>
      {response && <FlatList data={response} renderItem={renederItem} />}
    </SafeAreaView>
  );
};

export default React.memo(ContactInteractionsTabItem);
