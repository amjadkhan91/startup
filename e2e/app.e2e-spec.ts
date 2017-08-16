import { StartupPage } from './app.po';

describe('startup App', () => {
  let page: StartupPage;

  beforeEach(() => {
    page = new StartupPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
