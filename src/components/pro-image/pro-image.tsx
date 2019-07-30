import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'pro-image',
    styleUrl: 'pro-image.scss',
    shadow: true
})
export class ProImage {

    @Prop() alt?: string;
    @Prop() src!: string;

    // @Watch() src

    render() {
        return (
            <img
                src={this.src}
                alt={this.alt}
                decoding="async"
            />
        );
    }
}
