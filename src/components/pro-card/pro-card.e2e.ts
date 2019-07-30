import { newE2EPage } from '@stencil/core/testing';

describe('pro-card', () => {
    let page: any;

    beforeEach(async () => {
        page = await newE2EPage();
    })

    it('renders', async () => {
        await page.setContent('<pro-card></pro-card>');
        const element = await page.find('pro-card');
        expect(element).toHaveClass('hydrated');
    });

});
