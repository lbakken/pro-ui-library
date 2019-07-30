import { Component, h, Element, Prop, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
    tag: 'pro-radio',
    styleUrl: 'pro-radio.scss',
    shadow: true
})
export class ProRadio {

    @Element() el!: HTMLElement;

    @Prop() name: string = 'default-radio-name';
    @Prop({ mutable: true }) value!: any | null;
    @Prop() disabled = false;
    @Prop({ mutable: true }) checked = false;

    @Event() proRadioDidLoad!: EventEmitter<void>;
    @Event() proRadioDidUnload!: EventEmitter<void>;
    @Event() proSelect!: EventEmitter<any>;
    @Event() proDeselect!: EventEmitter<any>;
    @Event() proStyle!: EventEmitter<any>;

    @Watch('name')
    nameChanged() {
        this.emitStyle();
    }

    @Watch('checked')
    checkedChanged(isChecked: boolean) {
        if (isChecked) {
            this.proSelect.emit({
                checked: true,
                value: this.value
            });
        }
        this.emitStyle();
    }

    @Watch('disabled')
    disabledChanged() {
        this.emitStyle();
    }

    componentWillLoad() {
        this.emitStyle();
    }

    componentDidLoad() {
        this.proRadioDidLoad.emit();
    }

    componentDidUnload() {
        this.proRadioDidUnload.emit();
    }

    private emitStyle() {
        this.proStyle.emit({
            'radio-checked': this.checked,
            'interactive-disabled': this.disabled,
            'radio-value': this.value
        });
    }

    private onClick = () => {
        if (this.checked) {
            this.proDeselect.emit();
        } else {
            this.checked = true;
        }
    }

    /* <Host
                    onClick={this.onClick}
                    role="radio"
                    class={{
                        'radio-checked': this.checked,
                        'radio-disabled': this.disabled
                    }}
                >
                    <div class="radio-icon">
                        <div class="radio-inner" />
                    </div>
                    <button
                        type="button"
                        disabled={this.disabled}
                    >
                    </button>
                </Host> */

    render() {
        return (
            <input type="radio" onClick={this.onClick} name={this.name} value={this.value} checked={this.checked} />
        );
    }
}
