import {View, Text, Button} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import './i18n';

const LOCALE_PERSISTENCE_KEY = 'language';

export default function App() {
  const {t, i18n} = useTranslation();

  const onPressLearnMore = async () => {
    const lang = await AsyncStorage.getItem(LOCALE_PERSISTENCE_KEY);
    if (lang === 'en') {
      i18n.changeLanguage('fa');
      await AsyncStorage.setItem(LOCALE_PERSISTENCE_KEY, 'fa');
      console.log({lang})
    } else {
      i18n.changeLanguage('en');
      await AsyncStorage.setItem(LOCALE_PERSISTENCE_KEY, 'en');
      console.log({lang})
    }
  };
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>{t('text.HELLO')}</Text>
      <Button onPress={onPressLearnMore} title="change language" color="blue" />
    </View>
  );
}
