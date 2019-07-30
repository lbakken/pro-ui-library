import { newE2EPage } from '@stencil/core/testing';

describe('pro-radio-group', () => {
    let page: any;

    beforeEach(async () => {
        page = await newE2EPage();
    })

    it('renders', async () => {
        await page.setContent('<pro-radio-group></pro-radio-group>');
        const element = await page.find('pro-radio-group');
        expect(element).toHaveClass('hydrated');
    });

});
