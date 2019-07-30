import { newE2EPage } from '@stencil/core/testing';

describe('pro-input', () => {
    let page: any;

    beforeEach(async () => {
        page = await newE2EPage();
    })

    it('renders', async () => {
        await page.setContent('<pro-input></pro-input>');
        const element = await page.find('pro-input');
        expect(element).toHaveClass('hydrated');
    });

});
