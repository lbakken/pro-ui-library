import { newE2EPage } from '@stencil/core/testing';

describe('pro-header', () => {
    let page: any;

    beforeEach(async () => {
        page = await newE2EPage();
    })

    it('renders', async () => {
        await page.setContent('<pro-header></pro-header>');
        const element = await page.find('pro-header');
        expect(element).toHaveClass('hydrated');
    });

});
