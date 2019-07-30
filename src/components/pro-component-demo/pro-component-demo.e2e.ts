import { newE2EPage } from '@stencil/core/testing';

describe('pro-component-demo', () => {
  let page: any;

  beforeEach(async () => {
    page = await newE2EPage();
  })

  it('renders', async () => {
    await page.setContent('<pro-component-demo></pro-component-demo>');
    const element = await page.find('pro-component-demo');
    expect(element).toHaveClass('hydrated');
  });

});
