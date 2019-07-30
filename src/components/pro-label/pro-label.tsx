import { Component, h, ComponentInterface, Prop } from '@stencil/core';

@Component({
    tag: 'pro-label',
    styleUrl: 'pro-label.scss'
})
export class ProLabel implements ComponentInterface {

    @Prop() for!: string;

    render() {
        return (<label htmlfor={this.for}><slot /></label>);
    }
}
