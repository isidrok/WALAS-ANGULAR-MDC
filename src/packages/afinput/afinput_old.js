import {
    Component, Input, ViewChild, FormService, NgZone
} from '@walas/angular-core';
import * as textfield from '@material/textfield';
import '@material/textfield/dist/mdc.textfield.css';
import html from './afinput.html';
@Component({
    selector: 'af-input',
    template: html
})
export class AfInputOld {
    @Input() text = null;
    @Input() rule = null;
    @ViewChild('container') container;
    @ViewChild('control') control;
    target = null;
    prop = null;
    name = null;
    constructor(formService: FormService, ngZone: NgZone) {
        this._formService = formService;
        this._ngZone = ngZone;
        this._nativeElement = null;
        this._inputElement = null;
        this._mdcComponent = null;
    }
    getProp(target, prop) {
        return target[prop];
    }
    setProp(target, prop, value) {
        target[prop] = value;
    }
    setValidity = (valid) => {
        if (this.control && !this.control.dirty) {
            return;
        }
        let validity = valid ? '' : 'invalid';
        this._inputElement.setCustomValidity(validity);
        if (!valid) {
            this._ngZone.runOutsideAngular(() =>
                this.setProp(this.target, this.prop, undefined)
            );
        }
    }
    getErrorNames() {
        return Object.keys(this.control.errors || {});
    }
    ngOnInit() {
        if (!this.container) {
            throw new Error('No container');
        }
        this._nativeElement = this.container.nativeElement;
        this._inputElement = this._nativeElement.children[0];
    }
    ngAfterViewInit() {
        this._formService.addControl(this.control, this.name );
        this._mdcComponent = new textfield.MDCTextfield(this._nativeElement);
    }
    ngOnDestroy() {
        this._mdcComponent && this._mdcComponent.destroy();
        this._nativeElement = null;
        this._inputElement = null;
    }
}