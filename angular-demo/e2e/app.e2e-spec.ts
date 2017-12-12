import { NormalizedDbAngularDemoPage } from './app.po';

describe('normalized-db App', () => {
  let page: NormalizedDbAngularDemoPage;

  beforeEach(() => {
    page = new NormalizedDbAngularDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
