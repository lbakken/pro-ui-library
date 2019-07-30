import { Component, h, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'pro-row',
    styleUrl: 'pro-row.scss'
})
export class ProRow implements ComponentInterface {

    render() {
        return (<slot></slot>);
    }
}
