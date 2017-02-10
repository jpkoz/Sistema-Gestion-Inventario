import { SGSPage } from './app.po';

describe('sgs App', function() {
  let page: SGSPage;

  beforeEach(() => {
    page = new SGSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
