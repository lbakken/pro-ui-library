import { Component, h } from '@stencil/core';

@Component({
    tag: 'pro-list',
    styleUrl: 'pro-list.scss'
})
export class ProList {
    render() {
        return <slot />;
    }
}
