import {NgModule, WalasAngularMDCModule} from '@walas/angular-mdc';
import {DemoApp} from './demoapp';

@NgModule({
    imports: [
        WalasAngularMDCModule
    ],
    declarations: [
        DemoApp
    ],
    bootstrap: [
        DemoApp
    ]
})
export class DemoModule {}