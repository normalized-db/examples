import { BisswissMaintenanceToolFrontendPage } from './app.po';

describe('bisswiss-maintenance-tool-frontend App', () => {
  let page: BisswissMaintenanceToolFrontendPage;

  beforeEach(() => {
    page = new BisswissMaintenanceToolFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
