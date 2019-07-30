import { newE2EPage } from '@stencil/core/testing';

describe('pro-row', () => {
    let page: any;

    beforeEach(async () => {
        page = await newE2EPage();
    })

    it('renders', async () => {
        await page.setContent('<pro-row></pro-row>');
        const element = await page.find('pro-row');
        expect(element).toHaveClass('hydrated');
    });

});
