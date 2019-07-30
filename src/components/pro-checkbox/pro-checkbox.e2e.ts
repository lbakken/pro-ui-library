import { newE2EPage } from '@stencil/core/testing';

describe('pro-checkbox', () => {
    let page: any;

    beforeEach(async () => {
        page = await newE2EPage();
    })

    it('renders', async () => {
        await page.setContent('<pro-checkbox></pro-checkbox>');
        const element = await page.find('pro-checkbox');
        expect(element).toHaveClass('hydrated');
    });

});
