import {Component, ViewChild} from '@walas/angular-mdc';

@Component({
    selector: 'demo-app',
    template: `
    <af-form #frm [onSubmit]="onSubmit">
        <af-input model="model.email" rule="foo.email" text="email"></af-input>        
        <af-input model="model.password" text="password"></af-input>          
        <button type="submit">Submit</button>
    </af-form>
    `
})
export class DemoApp {
    @ViewChild('frm') form;
    onSubmit = () => {
        console.log(this.model);
        console.log(this.form.form);
        window.testForm = this.form.form;
    }
}