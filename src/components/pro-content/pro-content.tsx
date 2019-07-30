import { Component, h, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'pro-content',
    styleUrl: 'pro-content.scss',
    shadow: true
})
export class ProContent implements ComponentInterface {

    render() {
        return (<slot></slot>);
    }
}
