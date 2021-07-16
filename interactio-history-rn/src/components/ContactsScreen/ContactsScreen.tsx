import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

interface IContactsProps {
  navigation: {
    navigate: (a: string) => void;
  },
}

const Contacts = ({navigation}: IContactsProps) => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate('ContactInformationScreen')}>
        <Text>Oleg</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Contacts;
