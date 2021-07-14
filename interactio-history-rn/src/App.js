import type {Node} from 'react';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App: () => Node = () => {
    return (
        <SafeAreaView>
            <Text style={styles.sectionTitle}>NewInteraction!</Text>
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

export default App;
