import {NgModule, FormsModule, BrowserModule, WalasAngularCoreModule} from '@walas/angular-core';
import {AfInput} from './packages';

const ELEMENTS = [
    AfInput
];
const MODULES = [
    WalasAngularCoreModule,
    FormsModule,
    BrowserModule,
];

@NgModule({
    imports: MODULES,
    exports: ELEMENTS.concat(MODULES),
    declarations: ELEMENTS
})
export class WalasAngularMDCModule {}