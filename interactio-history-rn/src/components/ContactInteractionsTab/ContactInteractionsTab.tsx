import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { HTTP } from '../../common/http';
import { getInteractionResponse } from '../../store/selectors';
import { getContactInteractions } from '../../store/slice';

const ContactInteractionsTab = () => {
  const [interactions, setInteractions] = useState([]);
  const dispatch = useDispatch();
  // const interactions = useSelector(getInteractionResponse);
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

  // useEffect(() => {
  //   const getItem = async () => {
  //     try {
  //       const response = await HTTP.get(`contacts/${1}/records`);
  //       if (response) {
  //         setInteractions(response.data);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getItem();
  // }, []);

  useEffect(() => {
    dispatch(getContactInteractions('1'));
  }, [dispatch]);

  return (
    <SafeAreaView>
      <FlatList data={interactions} renderItem={renederItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewBorder: {
    borderBottomWidth: 1,
  },
});

export default React.memo(ContactInteractionsTab);
