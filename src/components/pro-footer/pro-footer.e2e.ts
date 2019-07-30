import { newE2EPage } from '@stencil/core/testing';

describe('pro-footer', () => {
    let page: any;

    beforeEach(async () => {
        page = await newE2EPage();
    })

    it('renders', async () => {
        await page.setContent('<pro-footer></pro-footer>');
        const element = await page.find('pro-footer');
        expect(element).toHaveClass('hydrated');
    });

});
