import {View, Text, Button, I18nManager} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import langStore from '../store/LangStore';

const LOCALE_PERSISTENCE_KEY = 'language';

export default function CatFunc() {
  const {t, i18n} = useTranslation();
  console.log('lang ', langStore.getState().lang);
  const onPressLearnMore = async () => {
    const lang = langStore.getState().lang;
    if (lang === 'en') {
      i18n.changeLanguage('fa');
      langStore.setState({lang: 'fa'});
      await AsyncStorage.setItem(LOCALE_PERSISTENCE_KEY, 'fa');
    } else {
      i18n.changeLanguage('en');
      langStore.setState({lang: 'en'});
      await AsyncStorage.setItem(LOCALE_PERSISTENCE_KEY, 'fa');
    }
  };

  return (
    <View style={{padding: 15}}>
      <Text style={{margin: 15}}>{t('text.HELLO')}</Text>
      <Button onPress={onPressLearnMore} title="change language" color="blue" />
    </View>
  );
}
