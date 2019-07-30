import { Component, h, Element, State, Method, Host } from '@stencil/core';

@Component({
    tag: 'pro-modal',
    styleUrl: 'pro-modal.scss',
    shadow: true
})
export class ProModal {

    @Element() el: HTMLElement;

    @State() presented = false;

    @Method()
    async present(): Promise<void> {
        if (!this.presented) this.presented = true;
    }

    @Method()
    async dismiss(): Promise<void> {
        if (this.presented) this.presented = false;
    }

    render() {
        return (this.presented) ? (
            <Host>
                <pro-backdrop onClick={() => this.dismiss()} />
                <div class="modal-window">
                    <div class="modal-content">
                        <slot />
                    </div>
                </div>
            </Host>
        ) : (
                <Host />
            );
    }
}
