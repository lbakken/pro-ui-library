import { Component, h, ComponentInterface, Prop } from '@stencil/core';

@Component({
    tag: 'pro-grid',
    styleUrl: 'pro-grid.scss'
})
export class ProGrid implements ComponentInterface {
    @Prop() fixed = false;

    hostData() {
        return {
            class: {
                'grid-fixed': this.fixed
            }
        };
    }

    render() {
        return (<slot></slot>);
    }
}
