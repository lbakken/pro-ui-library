import { newE2EPage } from '@stencil/core/testing';

describe('pro-content', () => {
    let page: any;

    beforeEach(async () => {
        page = await newE2EPage();
    })

    it('renders', async () => {
        await page.setContent('<pro-content></pro-content>');
        const element = await page.find('pro-content');
        expect(element).toHaveClass('hydrated');
    });

});
