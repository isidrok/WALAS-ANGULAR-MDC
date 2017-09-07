import {Component, Input, ViewChild, FormService} from '@walas/angular-core';
import * as textfield from '@material/textfield';
import html from './afinput.html';
@Component({
    selector: 'af-input',
    template: html
})
export class AfInput {
    @Input() text = null;
    @Input() rule = null;
    @ViewChild('container') container;
    @ViewChild('control') control;
    mdcComponent = null;
    target = null;
    prop = null;
    name = null;
    constructor(formService: FormService) {
        this.formService = formService;
        this.nativeElement = null;
        this.inputElement = null;
    }
    getProp(target, prop) {
        return target[prop];
    }
    setProp(target, prop, value) {
        target[prop] = value;
    }
    setValidity = (valid) => {
        if (!this.control.dirty) return;
        let validity = valid ? '' : 'invalid';
        this.inputElement.setCustomValidity(validity);
        // if (!valid) this.setProp(this.target, this.prop, undefined);
    }
    getErrorNames() {
        return Object.keys(this.control.errors || {});
    }
    ngOnInit() {
        if (!this.container) {
            throw new Error('No container');
        }
        this.nativeElement = this.container.nativeElement;
        this.inputElement = this.nativeElement.children[0];
    }
    ngAfterViewInit() {
        this.formService.addControl(this.name, this.control);
        this.mdcComponent = new textfield.MDCTextfield(this.nativeElement);
    }
    ngOnDestroy() {
        this.mdcComponent && this.mdlComponent.destroy();
        this.nativeElement = null;
        this.inputElement = null;
    }
}