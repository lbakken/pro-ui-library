import { newE2EPage } from '@stencil/core/testing';

describe('pro-list', () => {
    let page: any;

    beforeEach(async () => {
        page = await newE2EPage();
    })

    it('renders', async () => {
        await page.setContent('<pro-list></pro-list>');
        const element = await page.find('pro-list');
        expect(element).toHaveClass('hydrated');
    });

});
