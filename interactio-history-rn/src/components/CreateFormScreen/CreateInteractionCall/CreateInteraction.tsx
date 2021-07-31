import React, {useState} from 'react';
import InteractionInput from '../InteractionInput/InteractionInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  ScrollView,
  LayoutAnimation,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {Formik} from 'formik';
import * as yup from 'yup';
import stylesMain from '../../../styles.global';

const testData = ['red', 'blue', 'orange', 'blue'];

const updateLayout = () => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
};

const schema = yup.object({
  description: yup.string().required('Description is required field'),
  date: yup.string().required('Please, choose a date'),
});

const CreateInteractionCall = ({navigation}: any) => {
  const [selectedAccount, setSelectedAccount] = useState('Choose One');
  const [selectedCall, setSelectedCall] = useState('Connected');
  const [selectedTo, setSelectedTo] = useState('Rushan Ramazanov');
  const [selectedReason, setSelectedReason] = useState('Proposal');
  const [date, setDate] = useState(new Date());
  const [dateText, setDateText] = useState('');

  const [accIsActive, setAccIsActive] = useState(false);
  const [callIsActive, setCallIsActive] = useState(false);
  const [toIsActive, setToIsActive] = useState(false);
  const [reasonIsActive, setReasonIsActive] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [submit, setSubmit] = useState(false);

  const onChangeDate = (event: Event, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShowDate(Platform.OS === 'ios');
    setDate(currentDate);
    let temporaryDate = new Date(currentDate);
    let formattedDate = `${temporaryDate.getDate()}/${
      temporaryDate.getMonth() + 1
    }/${temporaryDate.getFullYear()}`;
    setDateText(formattedDate);
  };

  return (
    <ScrollView style={styles.app}>
      <Formik
        initialValues={{
          description: '',
          account: '',
          reason: selectedReason,
          outcome: selectedCall,
          date: '',
          contactTo: selectedTo,
        }}
        validationSchema={schema}
        onSubmit={values => {
          if (submit) {
            navigation.navigate('NavigationTab');
          }
          console.log(values);
        }}>
        {formikProps => (
          <>
            <View style={styles.dropdown}>
              <Text>Account</Text>
              <TouchableOpacity
                style={styles.dropdownBtn}
                onPress={() => {
                  setAccIsActive(!accIsActive);
                  updateLayout();
                }}>
                <Text style={styles.text}>{selectedAccount}</Text>
                <Icon name={'chevron-down'} size={17} />
              </TouchableOpacity>
              <InteractionInput
                data={testData}
                modalOpen={accIsActive}
                setModalOpen={setAccIsActive}
                setValue={setSelectedAccount}
                setField={formikProps.setFieldValue.bind(null, 'account')}
              />
            </View>
            <View style={styles.dropdown}>
              <Text>Date</Text>
              <TouchableOpacity
                style={styles.dropdownBtn}
                onPress={() => {
                  setShowDate(!showDate);
                  formikProps.setFieldValue('date', dateText);
                }}>
                <Text style={styles.text}>{dateText}</Text>
                <Feather name="calendar" size={17} />
              </TouchableOpacity>
              {showDate && (
                <DateTimePicker
                  value={date}
                  testID="dateTimePicker"
                  mode={'date'}
                  display="spinner"
                  onChange={onChangeDate}
                />
              )}
              <Text style={styles.errorText}>{formikProps.errors.date}</Text>
            </View>
            <View style={styles.dropdown}>
              <Text>Contact to</Text>
              <TouchableOpacity
                style={styles.dropdownBtn}
                onPress={() => {
                  setToIsActive(!toIsActive);
                  updateLayout();
                }}>
                <Text style={styles.text}>{selectedTo}</Text>
                <Icon name={'chevron-down'} size={17} />
              </TouchableOpacity>
              <InteractionInput
                data={testData}
                modalOpen={toIsActive}
                setModalOpen={setToIsActive}
                setValue={setSelectedTo}
                setField={formikProps.setFieldValue.bind(null, 'contactTo')}
              />
            </View>
            <View style={styles.dropdown}>
              <Text>Call Outcome</Text>
              <TouchableOpacity
                style={styles.dropdownBtn}
                onPress={() => {
                  setCallIsActive(!callIsActive);
                  updateLayout();
                }}>
                <Text style={styles.text}>{selectedCall}</Text>
                <Icon name={'chevron-down'} size={17} />
              </TouchableOpacity>
              <InteractionInput
                data={testData}
                modalOpen={callIsActive}
                setModalOpen={setCallIsActive}
                setValue={setSelectedCall}
                setField={formikProps.setFieldValue.bind(null, 'outcome')}
              />
            </View>
            <View style={styles.dropdown}>
              <Text>Interaction Reason</Text>
              <TouchableOpacity
                style={styles.dropdownBtn}
                onPress={() => {
                  setReasonIsActive(!reasonIsActive);
                  updateLayout();
                }}>
                <Text style={styles.text}>{selectedReason}</Text>
                <Icon name={'chevron-down'} size={17} />
              </TouchableOpacity>
              <InteractionInput
                data={testData}
                modalOpen={reasonIsActive}
                setModalOpen={setReasonIsActive}
                setValue={setSelectedReason}
                setField={formikProps.setFieldValue.bind(null, 'reason')}
              />
            </View>
            <View style={styles.dropdown}>
              <Text>Description</Text>
              <TextInput
                placeholder={'Enter the description...'}
                style={styles.textInput}
                multiline
                onChangeText={formikProps.handleChange('description')}
                value={formikProps.values.description}
                onBlur={formikProps.handleBlur('email')}
              />
              <Text style={styles.errorText}>
                {formikProps.touched.description &&
                  formikProps.errors.description}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.sbtButton}
              onPress={() => {
                formikProps.handleSubmit();
                setSubmit(true);
              }}>
              <Text style={styles.sbtText}>SAVE</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // date: {
  //   backgroundColor: 'white',
  // },
  app: {
    backgroundColor: '#fcfcfc',
    flex: 1,
  },
  // upText: {
  //   color: 'white',
  // },
  text: {fontSize: 17},
  dropdown: {
    padding: 20,
  },
  dropdownBtn: {
    backgroundColor: 'white',
    marginBottom: 10,
    fontSize: 17,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    paddingVertical: 10,
    fontSize: 17,
    height: 100,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
  },
  emailInput: {
    marginBottom: 10,
    padding: 10,
    paddingVertical: 10,
    fontSize: 17,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
  },
  sbtButton: {
    shadowOpacity: 0.5,
    shadowRadius: 15,
    width: '40%',
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: '#183147',
    marginBottom: 20,
    fontSize: 17,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  sbtText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
    color: 'white',
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
  },
});
export default CreateInteractionCall;
