import { newE2EPage, E2EPage } from '@stencil/core/testing';

describe('pro-backdrop', () => {
    let page: E2EPage;

    beforeEach(async () => {
        page = await newE2EPage();
    })

    it('renders', async () => {
        await page.setContent('<pro-backdrop></pro-backdrop>');
        const element = await page.find('pro-backdrop');
        expect(element).toHaveClass('hydrated');
    });

});
