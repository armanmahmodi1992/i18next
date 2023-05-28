import React, {Component} from 'react';
import {Text, View, Button, I18nManager, StyleSheet} from 'react-native';
import {withTranslation} from 'react-i18next';

import langStore from '../store/LangStore';
import StyleSheetFactory from '../styles/Style';

const withStore = BaseComponent => props => {
  const store = langStore();
  return <BaseComponent {...props} store={store} />;
};

class Cat extends Component {
  onPressLearnMore = async () => {
    const lang = langStore.getState().lang;
    if (lang == 'en') {
      langStore.setState({lang: 'fa'});
    } else {
      langStore.setState({lang: 'en'});
    }
    console.log('first', langStore.getState().lang);
    // this.forceUpdate();
  };

  render() {
    const lang = langStore.getState().lang;
    var styles = StyleSheetFactory.getSheet(lang);
    console.log('first', langStore.getState().lang, {styles});
    var styles = StyleSheetFactory.getSheet();
    return (
      <View style={{height:200}}>
        <View style={styles.flex_direction_style}>
          <Text>{this.props.t('text.HELLO')}</Text>
        </View>
        <Button
          onPress={this.onPressLearnMore}
          title="change language"
          color="blue"
        />
      </View>
    );
  }
}

// export default withTranslation()(Cat);
const MyClass = withStore(Cat);
export default withTranslation()(MyClass);
