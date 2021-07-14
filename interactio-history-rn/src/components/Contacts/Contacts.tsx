import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';

interface IContactsProps {
  navigation: {
    navigate: (a: string) => void;
  },
}

const Contacts = ({navigation}: IContactsProps) => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate('ContactInformation')}>
        <Text style={styles.item}>Oleg</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    fontSize: 24,
    fontWeight: '600',
  },
});

export default Contacts;
