import App from './app';
import * as Controllers from './controllers';

const app = new App(
  Controllers.default,
  5000,
);
 

export const instanceApp = app.listen();