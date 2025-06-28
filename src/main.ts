import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { fluidEnvironments } from '../fluid';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
const script = document.createElement('script');

/**
 * Set this to dev, test, prod or local to switch environments
 * for the sandbox
 */
export const fluid = fluidEnvironments.external;

if ('noModule' in script) {
  script.type = 'module';
  script.src = fluid.esm;
} else {
  // script.type = 'text/javascript';
  // script.src = fluid.legacy;
}
document.head.appendChild(script);