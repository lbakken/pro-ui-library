import { Component, h, Element, Prop, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
    tag: 'pro-checkbox',
    styleUrl: 'pro-checkbox.scss',
    shadow: true
})
export class ProCheckbox {

    @Element() el!: HTMLElement;

    @Prop() name!: string;
    @Prop({ mutable: true }) value!: any | null;
    @Prop() disabled = false;
    @Prop({ mutable: true }) checked = false;

    @Event() proChange!: EventEmitter<any>;
    @Event() proStyle!: EventEmitter<any>;

    componentWillLoad() {
        this.emitStyle();
    }

    @Watch('checked')
    checkedChanged(isChecked: boolean) {
        this.proChange.emit({
            checked: isChecked,
            value: this.value
        });
        this.emitStyle();
    }

    @Watch('disabled')
    disabledChanged() {
        this.emitStyle();
    }

    private emitStyle() {
        this.proStyle.emit({
            'checkbox-checked': this.checked,
            'interactive-disabled': this.disabled,
            'checkbox-value': this.value
        });
    }

    private onClick = () => {
        this.checked = !this.checked;
    }

    render() {
        return <input type="checkbox" onClick={this.onClick} />;
    }
}
