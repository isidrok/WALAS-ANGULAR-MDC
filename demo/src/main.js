import {platformBrowserDynamic, enableProdMode} from '@walas/angular-mdc';
import {DemoModule} from './module';
import '@walas/angular-mdc/dist/walas_angular_mdc.css';

if (ENVIRONMENT === 'production') {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(DemoModule);