import React from 'react';
import ReactDOM from 'react-dom';

import Students from "./containers/Students";
import {colors} from "./utils/colors";

document.body.style.backgroundColor = `${colors.GRAY}`;

ReactDOM.render(
  <React.StrictMode>
    <Students />
  </React.StrictMode>,
  document.getElementById('root')
);
