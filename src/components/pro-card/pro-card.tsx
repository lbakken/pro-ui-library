import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'pro-card',
    styleUrl: 'pro-card.scss'
})
export class ProCard {

    @Prop({ context: 'window' }) win!: Window;
    @Prop() button = false;
    @Prop() type: 'submit' | 'reset' | 'button' = 'button';
    @Prop() disabled = false;
    @Prop() href: string | undefined;
    @Prop() rel: string | undefined;
    @Prop() target: string | undefined;

    private isClickable(): boolean {
        return (this.href !== undefined || this.button);
    }

    hostData() {
        return {
            class: {
                'card-disabled': this.disabled,
                'ion-activatable': this.isClickable()
            }
        };
    }

    render() {
        const clickable = this.isClickable();

        if (!clickable) {
            return [
                <slot></slot>
            ];
        }

        const { href } = this;
        const TagType = clickable ? (href === undefined ? 'button' : 'a') : 'div' as any;
        const attrs = (TagType === 'button')
            ? { type: this.type }
            : {
                href: this.href,
                rel: this.rel,
                target: this.target
            };

        return (
            <TagType
                {...attrs}
                class="card-native"
                disabled={this.disabled}
            >
                <slot></slot>
                {clickable && <pro-ripple-effect></pro-ripple-effect>}
            </TagType>
        );
    }
}
