import { newE2EPage } from '@stencil/core/testing';

describe('pro-button', () => {
    let page: any;

    beforeEach(async () => {
        page = await newE2EPage();
    })

    it('renders', async () => {
        await page.setContent('<pro-button></pro-button>');
        const element = await page.find('pro-button');
        expect(element).toHaveClass('hydrated');
    });

});
