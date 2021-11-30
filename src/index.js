import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import JobsList from "./components/jobslist";
import localeEnMessages from "./locales/en";
import localeEsMessages from "./locales/es";

//variabler para cambiar el idioma. en - english y es - español
const language = 'es';
const messages = {
	'es': localeEsMessages,
	'en': localeEnMessages
  };
ReactDOM.render(
	<IntlProvider locale={language} messages= {messages[language]}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);
console.log(language);
