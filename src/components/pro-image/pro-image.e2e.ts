import { newE2EPage } from '@stencil/core/testing';

describe('pro-image', () => {
    let page: any;

    beforeEach(async () => {
        page = await newE2EPage();
    })

    it('renders', async () => {
        await page.setContent('<pro-image></pro-image>');
        const element = await page.find('pro-image');
        expect(element).toHaveClass('hydrated');
    });

});
