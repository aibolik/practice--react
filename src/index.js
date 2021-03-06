import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import App from './projects/WeatherApp/App';
// import App from './projects/KeyboardApp/App';
// import App from './projects/AudioNotesApp/App';
// import App from './projects/AjaxTypeAheadApp/App';
// import App from './projects/DebounceHook/App';
// import App from './projects/AnimatedShadowApp/App';
// import App from './projects/CatinderApp/App';
// import App from './projects/GithubExlorer/App';
// import App from './projects/ToasterApp/App';
// import App from './projects/GithubFileFinderApp/App';
// import App from './projects/KonamiApp/App';
// import App from './projects/DarkModeApp/App';
// import App from './projects/TabNavigationApp/App';
// import App from './projects/EditorApp/App';
// import App from './projects/ReusableComponentApp/App';
// import App from './projects/PricingCalculatorApp/App';
// import App from './projects/CalculatorApp/App';
import App from './projects/TimerApp/App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
