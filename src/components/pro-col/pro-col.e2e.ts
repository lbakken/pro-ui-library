import { newE2EPage } from '@stencil/core/testing';

describe('pro-col', () => {
    let page: any;

    beforeEach(async () => {
        page = await newE2EPage();
    })

    it('renders', async () => {
        await page.setContent('<pro-col></pro-col>');
        const element = await page.find('pro-col');
        expect(element).toHaveClass('hydrated');
    });

});
