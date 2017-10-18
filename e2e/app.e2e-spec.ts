import { CmdbstartPage } from './app.po';

describe('cmdbstart App', () => {
  let page: CmdbstartPage;

  beforeEach(() => {
    page = new CmdbstartPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
