import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const InteractionInput: React.FC<{
  modalOpen: boolean;
  setModalOpen: (boo: boolean) => void;
  setValue: (val: string) => void;
  data: string[];
  setField: (option: string) => void;
}> = ({modalOpen, setModalOpen, setValue, setField, data}) => {
  return (
    <>
      {modalOpen && (
        <View style={styles.dropdownContent}>
          {data.map(option => (
            <TouchableOpacity
              key={Math.random().toString()}
              onPress={() => {
                setValue(option);
                setModalOpen(false);
                setField(option);
              }}
              style={styles.dropdownItem}>
              <Text style={styles.text}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  text: {fontSize: 18},
  dropdownContent: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 5,
    shadowOpacity: 0.5,
    shadowRadius: 15,
    alignSelf: 'stretch',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  dropdownItem: {},
});

export default InteractionInput;
