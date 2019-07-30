import { Component, h, ComponentInterface, Prop, Element, Listen } from '@stencil/core';
import { matchBreakpoint } from '../../utils/utils';

const win = window as any;
const SUPPORTS_VARS = !!(win.CSS && win.CSS.supports && win.CSS.supports('--a: 0'));
const BREAKPOINTS = ['', 'xs', 'sm', 'md', 'lg', 'xl'];

@Component({
    tag: 'pro-col',
    styleUrl: 'pro-col.scss',
})
export class ProCol implements ComponentInterface {

    @Element() el!: any;

    @Prop({ context: 'window' }) win!: Window;

    @Prop() offset?: string;
    @Prop() offsetXs?: string;
    @Prop() offsetSm?: string;
    @Prop() offsetMd?: string;
    @Prop() offsetLg?: string;
    @Prop() offsetXl?: string;

    @Prop() pull?: string;
    @Prop() pullXs?: string;
    @Prop() pullSm?: string;
    @Prop() pullMd?: string;
    @Prop() pullLg?: string;
    @Prop() pullXl?: string;

    @Prop() push?: string;
    @Prop() pushXs?: string;
    @Prop() pushSm?: string;
    @Prop() pushMd?: string;
    @Prop() pushLg?: string;
    @Prop() pushXl?: string;

    @Prop() size?: string;
    @Prop() sizeXs?: string;
    @Prop() sizeSm?: string;
    @Prop() sizeMd?: string;
    @Prop() sizeLg?: string;
    @Prop() sizeXl?: string;

    @Listen('resize', { target: 'window' })
    onResize() {
        this.el.forceUpdate();
    }

    private getColumns(property: string) {
        let matched: any;

        for (const breakpoint of BREAKPOINTS) {
            const matches = matchBreakpoint(this.win, breakpoint);

            const columns = (this as any)[property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];

            if (matches && columns !== undefined) {
                matched = columns;
            }
        }
        return matched;
    }

    private calculateSize() {
        const columns = this.getColumns('size');

        if (!columns || columns === '') {
            return;
        }
        const colSize = (columns === 'auto')
            ? 'auto'
            : SUPPORTS_VARS ? `calc(calc(${columns} / var(--pro-grid-columns, 12)) * 100%)`
                : ((columns / 12) * 100) + '%';

        return {
            'flex': `0 0 ${colSize}`,
            'width': `${colSize}`,
            'max-width': `${colSize}`
        };
    }

    private calculatePosition(property: string, modifier: string) {
        const columns = this.getColumns(property);
        if (!columns) {
            return;
        }
        const amount = SUPPORTS_VARS
            ? `calc(calc(${columns} / var(--pro-grid-columns, 12)) * 100%)`
            : (columns > 0 && columns < 12) ? (columns / 12 * 100) + '%' : 'auto';

        return {
            [modifier]: amount
        };
    }

    private calculateOffset(isRTL: boolean) {
        return this.calculatePosition('offset', isRTL ? 'margin-right' : 'margin-left');
    }

    private calculatePull(isRTL: boolean) {
        return this.calculatePosition('pull', isRTL ? 'left' : 'right');
    }

    private calculatePush(isRTL: boolean) {
        return this.calculatePosition('push', isRTL ? 'right' : 'left');
    }

    hostData() {
        const isRTL = this.win.document.dir === 'rtl';
        return {
            style: {
                ...this.calculateOffset(isRTL),
                ...this.calculatePull(isRTL),
                ...this.calculatePush(isRTL),
                ...this.calculateSize(),
            }
        };
    }

    render() {
        return <slot></slot>;
    }
}
