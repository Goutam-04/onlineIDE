import React from 'react'
import Select from "react-select";
import monacoThemes from "monaco-themes/themes/themelist";
// import { languageOptions } from "../constants/languageOptions";
import { customStyles } from "../constants/customStyles";

const ThemeDropdown = ({ handleThemeChange, theme }) => {
    return (
        <Select
            placeholder={`Select Theme`}
            // options={languageOptions}
            options={Object.entries(monacoThemes).map(([themeId, themeName]) => ({
                label: themeName,
                value: themeId,
                key: themeId,
            }))}
            value={theme}
            styles={customStyles}
            onChange={handleThemeChange}
        />
    )
}



const LanguagesDropdown = ({ onSelectChange, Userlanguage }) => {
    return (
        <Select
            placeholder={`Filter By Category`}
            options={languageOptions}
            styles={customStyles}

            defaultValue={Userlanguage}
            onChange={(selectedOption) => onSelectChange(selectedOption)}
        />
    );
};

export  {ThemeDropdown,LanguagesDropdown}
