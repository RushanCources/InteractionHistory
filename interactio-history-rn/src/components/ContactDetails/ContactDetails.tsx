import React from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';

const ContactDetails = ({navigation}: any) => {
  const loadForm = () => navigation.navigate('NewInteraction');

  return (
    <SafeAreaView>
      <Text style={styles.sectionTitle}>Welcome to Contact Details</Text>
      <Button title="Create New Interaction" onPress={loadForm} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    backgroundColor: '#FFF',
  },
});

export default ContactDetails;
