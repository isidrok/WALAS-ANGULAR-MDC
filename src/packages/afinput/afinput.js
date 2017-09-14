import {
    Component, FormService, NgZone
} from '@walas/angular-core';
import {BaseComponent} from '../basecomponent';
import * as textfield from '@material/textfield';
import '@material/textfield/dist/mdc.textfield.css';
import html from './afinput.html';

@Component({
    selector: 'af-input',
    template: html
})
export class AfInput extends BaseComponent {
    constructor(formService: FormService, ngZone: NgZone) {
        super(formService, ngZone);
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this._mdcComponent = new textfield.MDCTextfield(this._nativeElement);
    }
}
