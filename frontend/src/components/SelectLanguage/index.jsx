// ==================== react ====================
import React from 'react';
// =============== translations ==================
import { useTranslation } from 'react-i18next';
// ================== icons ======================
import TranslateRoundedIcon from '@material-ui/icons/TranslateRounded';
// ===============================================

const SelectLanguage = ({ iconSize }) => {
    const [ t, i18n ] = useTranslation();
    const changeLanguage = (lng) => i18n.changeLanguage(lng);
    return (
      <>
        <TranslateRoundedIcon fontSize={ iconSize }/>
        <select 
            value={ i18n.language } 
            onChange={ ({ target }) => changeLanguage(target.value) }
        >
            {
              i18n.options.languages.map(language => 
                  <option key={ language } value={ language }>
                    { t(`languages.${ language }`) }
                  </option>
              )
            }
        </select>
      </>
    );
};

export default SelectLanguage;
