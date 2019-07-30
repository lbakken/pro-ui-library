import { Component, h } from '@stencil/core';

@Component({
    tag: 'pro-header',
    styleUrl: 'pro-header.scss'
})
export class ProHeader {

    render() {
        return (<slot />);
    }
}
