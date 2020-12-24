import _template from 'lodash/template';
import _templateSettings from 'lodash/templateSettings';
import en from './en.json';
import ar from './ar.json';
import fr from './fr.json';

const TRANSLATIONS = {
  en,
  ar,
  fr
}

_templateSettings.interpolate = /{{([\s\S]+?)}}/g;

const translate = (language = 'en') => (token, params = {}) => {
  let value;

  try {
    value = TRANSLATIONS[language][token];
  } catch (err) {
    console.error('Translation Error', err);
    value = token;
  }

  return _template(value)(params);
}

export default translate;