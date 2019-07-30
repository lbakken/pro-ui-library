import { Component, h, Element, Prop, Listen } from '@stencil/core';

@Component({
    tag: 'pro-radio-group',
    styleUrl: 'pro-radio-group.scss'
})
export class ProRadioGroup {

    private selects: HTMLProRadioElement[] = [];

    @Element() el!: HTMLElement;

    @Prop() name!: string;
    @Prop() value: string;

    @Listen('proRadioDidLoad')
    onRadioDidLoad(ev: Event) {
        const select = ev.target as HTMLProRadioElement;
        select.name = this.name;

        this.selects.push(select);
        this.updateRadios();
    }

    @Listen('proRadioDidUnload')
    onRadioDidUnload(ev: Event) {
        const index = this.selects.indexOf(ev.target as HTMLProRadioElement);
        if (index > -1) {
            this.selects.splice(index, 1);
        }
    }

    @Listen('proSelect')
    onSelect(ev: Event) {
        const selectedRadio = ev.target as HTMLProRadioElement | null;
        if (selectedRadio) {
            selectedRadio.checked = true;
            this.value = selectedRadio.value;
        }
        this.updateRadios();
    }

    @Listen('proDeselect')
    onDeselect(ev: Event) {
        const selectedRadio = ev.target as HTMLProRadioElement | null;
        if (selectedRadio) {
            selectedRadio.checked = false;
            this.value = undefined;
        }
        this.updateRadios();
    }

    componentDidLoad() {
        this.updateRadios();
    }

    private updateRadios() {
        const value = this.value;
        let hasChecked = false;
        for (const select of this.selects) {
            if (!hasChecked && select.value === value) {
                hasChecked = true;
                select.checked = true;
            } else {
                select.checked = false;
            }
        }
    }


    render() {
        return <slot />;
    }
}
