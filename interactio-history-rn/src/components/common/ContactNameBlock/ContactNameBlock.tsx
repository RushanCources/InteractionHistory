import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import stylesMain from '../../../styles.global'

interface IContactNameBlockProps {
  item: {
    firstName?: string
    lastName?: string
    jobTitle?: string
    account?: {
      name: string
    }
  }
  styleContainer: object
  styleRow: object
  styleTitle: object
  styleDescr: object
}

const ContactNameBlock = ({ item, styleContainer, styleRow, styleTitle, styleDescr }: IContactNameBlockProps) => {

  const firstName = item.firstName
  const lastName = item.lastName
  const jobTitle = item.jobTitle
  const nameСompany = item.account?.name

  return (
    <View style={styleContainer}>
      {firstName && lastName
        ?
        <View style={styleRow}>
          {
            jobTitle && <Text style={styleTitle}>{firstName + ' '}</Text>
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