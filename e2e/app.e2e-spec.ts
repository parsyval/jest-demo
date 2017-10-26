import { JestDemoPage } from './app.po';

describe('jest-demo App', () => {
  let page: JestDemoPage;

  beforeEach(() => {
    page = new JestDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
