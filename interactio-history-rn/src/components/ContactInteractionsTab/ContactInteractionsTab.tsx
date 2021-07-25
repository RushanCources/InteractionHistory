import React, {useCallback, useEffect} from 'react';
import {FlatList, SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getInteractionResponse} from '../../store/selectors';
import {getContactInteractions} from '../../store/slice';

const ContactInteractionsTab = () => {
  const interactions = useSelector(getInteractionResponse);
  const {response} = interactions;
  const dispatch = useDispatch();

  const renederItem = useCallback(item => {
    return (
      <View style={styles.viewBorder}>
        <Text>{`data: ${item.item.date}`}</Text>
        <Text>{`descriptions: ${item.item.description}`}</Text>
        <Text>{`contact_id: ${item.item.contact_id}`}</Text>
        <View>
          <Text>{`type_id: ${item.item.type.id}`}</Text>
          <Text>{`type_name: ${item.item.type.name}`}</Text>
        </View>
      </View>
    );
  }, []);

  useEffect(() => {
    dispatch(getContactInteractions(1));
  }, [dispatch]);

  return (
    <SafeAreaView>
      {response && <FlatList data={response} renderItem={renederItem}/>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewBorder: {
    borderBottomWidth: 1,
  },
});

export default React.memo(ContactInteractionsTab);
