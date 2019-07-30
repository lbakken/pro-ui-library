import { newE2EPage } from '@stencil/core/testing';

describe('pro-radio', () => {
    let page: any;

    beforeEach(async () => {
        page = await newE2EPage();
    })

    it('renders', async () => {
        await page.setContent('<pro-radio></pro-radio>');
        const element = await page.find('pro-radio');
        expect(element).toHaveClass('hydrated');
    });

});
