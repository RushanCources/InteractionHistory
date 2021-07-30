import React from 'react';
import { Text, View } from 'react-native';
import { TContactData } from '../../../store/type';

interface IContactNameBlockProps {
  item: TContactData
  styleContainer?: object
  styleRow?: object
  styleTitle?: object
  styleDescr?: object
}

const ContactNameBlock = ({ item, styleContainer = {}, styleRow = {}, styleTitle = {}, styleDescr = {} }: IContactNameBlockProps) => {

  const firstName = item.firstName
  const lastName = item.lastName
  const jobTitle = item.jobTitle
  const nameСompany = item.account?.name

  return (
    <View style={styleContainer}>
      {firstName || lastName
        ?
        <View style={styleRow}>
          {
            firstName && <Text style={styleTitle}>{firstName + ' '}</Text>
          }
          {
            lastName && <Text style={styleTitle}>{lastName}</Text>
          }
        </View>
        :
        <Text style={styleTitle}>Unknown contact</Text>
      }

      <View style={styleRow}>
        {
          jobTitle && <Text style={styleDescr}>{jobTitle + ' '}</Text>
        }
        {
          nameСompany && <Text style={styleDescr}>{'from ' + nameСompany}</Text>
        }
      </View>
    </View>
  );
};

export default ContactNameBlock;