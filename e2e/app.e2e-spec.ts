import { ArAngularDemoPage } from './app.po';

describe('ar-angular-demo App', () => {
  let page: ArAngularDemoPage;

  beforeEach(() => {
    page = new ArAngularDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
