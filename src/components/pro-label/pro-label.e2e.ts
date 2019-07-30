import { newE2EPage } from '@stencil/core/testing';

describe('pro-label', () => {
    let page: any;

    beforeEach(async () => {
        page = await newE2EPage();
    })

    it('renders', async () => {
        await page.setContent('<pro-label></pro-label>');
        const element = await page.find('pro-label');
        expect(element).toHaveClass('hydrated');
    });

});
