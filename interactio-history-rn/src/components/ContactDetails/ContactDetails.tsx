import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const ContactDetails = () => {
  return (
    <SafeAreaView>
      <Text style={styles.sectionTitle}>Welcome to Contact Details</Text>
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
