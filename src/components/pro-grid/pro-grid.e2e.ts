import { newE2EPage } from '@stencil/core/testing';

describe('pro-grid', () => {
    let page: any;

    beforeEach(async () => {
        page = await newE2EPage();
    })

    it('renders', async () => {
        await page.setContent('<pro-grid></pro-grid>');
        const element = await page.find('pro-grid');
        expect(element).toHaveClass('hydrated');
    });

});
