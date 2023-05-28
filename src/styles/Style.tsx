import {StyleSheet} from 'react-native';
import langStore from '../store/LangStore';

// var isRTL = true;
export default class StyleSheetFactory {
//   static getSheet(lang) {
  static getSheet() {
    const lang = langStore.getState().lang;
    console.log({lang});
    const isRTL = lang === 'fa' ? true : false;
    console.log('isRTL===>', isRTL);
    return StyleSheet.create({
      //#region - FOR ALL
      flex_direction_style: {
        flex: 1,
        flexDirection: isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
      },
    });
  }
}
