import { Component, Prop, Event, EventEmitter, Listen, ComponentInterface } from '@stencil/core';
import { now } from '../../utils/utils';

@Component({
    tag: 'pro-backdrop',
    styleUrl: 'pro-backdrop.scss',
    shadow: true
})
export class ProBackdrop implements ComponentInterface {

    private lastClick = -10000;

    @Prop() visible = true;
    @Prop() tappable = true;

    @Event() ionBackdropTap!: EventEmitter<void>;

    @Listen('touchstart', { passive: false, capture: true })
    protected onTouchStart(ev: TouchEvent) {
        this.lastClick = now(ev);
        this.emitTap();
    }

    @Listen('click', { passive: false, capture: true })
    @Listen('mousedown', { passive: false, capture: true })
    protected onMouseDown(ev: TouchEvent) {
        if (this.lastClick < now(ev) - 2500) {
            this.emitTap();
        }
    }

    private emitTap() {
        if (this.tappable) {
            this.ionBackdropTap.emit();
        }
    }

    hostData() {
        return {
            tabindex: '-1',
            class: {
                'backdrop-hide': !this.visible,
                'backdrop-no-tappable': !this.tappable,
            }
        };
    }
}
