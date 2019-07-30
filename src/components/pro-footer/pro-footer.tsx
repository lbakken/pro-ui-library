import { Component, h, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'pro-footer',
    styleUrl: 'pro-footer.scss',
    shadow: true
})
export class ProFooter implements ComponentInterface {

    render() {
        return <slot />;
    }
}
