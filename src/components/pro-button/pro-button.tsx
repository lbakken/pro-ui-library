import { Component, h, Element, Prop } from '@stencil/core';

@Component({
    tag: 'pro-button',
    styleUrl: 'pro-button.scss',
    shadow: true
})
export class ProButton {

    @Element() el: HTMLElement;

    @Prop() href: string | undefined;
    @Prop() type: 'submit' | 'reset' | 'button' = 'button';
    @Prop({ reflect: true }) disabled = false;

    private handleClick = (ev: Event) => {
        const form = this.el.closest('form');
        if (form) {
            ev.preventDefault();

            const fakeButton = document.createElement('button');
            fakeButton.type = this.type;
            fakeButton.style.display = 'none';
            form.appendChild(fakeButton);
            fakeButton.click();
            fakeButton.remove();
        }
    }

    render() {
        return (
            <button
                class="button-native"
                disabled={this.disabled}
                type={this.type}
                onClick={this.handleClick}
            >
                <span class="button-inner">
                    <slot name="icon-only"></slot>
                    <slot name="start"></slot>
                    <slot></slot>
                    <slot name="end"></slot>
                </span>
            </button>
        );
    }
}
