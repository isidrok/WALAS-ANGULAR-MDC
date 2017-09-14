import {
    ViewChild, Input
} from '@walas/angular-core';
export class BaseComponent {
    @Input() text = null;
    @Input() rule = null;
    @ViewChild('container') container;
    @ViewChild('control') control;
    target = null;
    prop = null;
    name = null;
    constructor(formService, ngZone) {
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
        this._formService.addControl(this.control, this.name);
    }
    ngOnDestroy() {
        this._mdcComponent && this._mdcComponent.destroy();
        this._nativeElement = null;
        this._inputElement = null;
    }
}