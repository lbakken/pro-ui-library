import { newE2EPage } from '@stencil/core/testing';

describe('pro-modal', () => {
    let page: any;

    beforeEach(async () => {
        page = await newE2EPage();
    })

    it('renders', async () => {
        await page.setContent('<pro-modal></pro-modal>');
        const element = await page.find('pro-modal');
        expect(element).toHaveClass('hydrated');
    });

});
