import { Component, h, State, Prop, Host, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'pro-input',
    styleUrl: 'pro-input.scss',
    shadow: true
})
export class ProInput {

    @State() class: string;
    @State() reqLabel: string;

    @Prop() placeholder: string;
    @Prop() regex: RegExp = /^(.+)$/;
    @Prop({ mutable: true }) label: string;
    @Prop() required: boolean = false;

    componentWillLoad() {
        if (this.required) {
            this.reqLabel = 'required';
        }
    }

    @Event() inputChange: EventEmitter;
    onInputChange(ev: any) {
        const value = ev.target.value as string;
        let validated: boolean = false;
        if (value != '') {
            (this.required) ? validated = this.regex.test(value) : validated = true;
            validated ? this.class = 'valid' : this.class = 'invalid';
        } else {
            validated = !this.required;
            validated ? this.class = '' : this.class = 'invalid';
        }
        this.inputChange.emit({
            name: this.label,
            value: value,
            valid: validated
        });
    }

    render() {
        return (
            <Host>
                <label htmlFor={this.label} class={this.reqLabel}>{this.label}</label>
                <input onChange={(ev) => this.onInputChange(ev)} name={this.label} placeholder={this.placeholder} id={this.label} class={this.class}></input>
            </Host>
        );
    }
}
