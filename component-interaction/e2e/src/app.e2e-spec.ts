import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to component-interaction!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

  const HeroNames = ['Lisa','<No name set>','Jonathan','Joey','<No name set>'];
  const MasterName = 'Dean';

  it('should pass properties to children properly', () => {
    let parent = element.all(by.tagName('app-hello-parent')).get(0);
    let heros = parent.all(by.tagName('app-hello-child'));
    
    for(let i = 0; i < HeroNames.length; i++){
        let childTitle = heros.get(i).element(by.tagName('h3')).getText();
        let childDetail = heros.get(i).element(by.tagName('p')).getText();

        expect(childTitle).toEqual(HeroNames[i] + ' says:');
        expect(childDetail).toContain(MasterName);
    }
  });

  it('should display trimmed, non-empty names', () =>{
    const nonEmptyNameIndex = 0;
    const nonEmptyName="Lisa";

    let parent = element.all(by.tagName('app-hello-parent')).get(0);
    let hero = parent.all(by.tagName('app-hello-child')).get(nonEmptyNameIndex);
    let name = hero.element(by.tagName('app-hero-name'));

    let heroName = name.element(by.tagName('h3')).getText();
    expect(heroName).toEqual(nonEmptyName + ' says:');
  });

  it('should replace empty name with default name', ()=>{
    const emptyNameIndex = 1;
    const emptyName="<No name set>";

    let parent = element(by.tagName('app-hello-parent'));
    let hero = parent.all(by.tagName('app-hello-child')).get(emptyNameIndex);
    let name = hero.element(by.tagName('app-hero-name'));

    let heroName = name.element(by.tagName('h3')).getText();
    expect(heroName).toEqual(emptyName + ' says:');
  });

  it('should set expected values after clicking Minor twice', ()=>{
    let repoTag = element(by.tagName('app-version-parent'));
    let newMinorButton = repoTag.all(by.tagName('button')).get(0);

    newMinorButton.click().then(()=>{
      newMinorButton.click().then(()=>{
        let actual = getActual();

        expect(actual.label).toBe('Version: 1.2');
        expect(actual.count).toBe(3);
        expect(actual.logs.get(2).getText()).toBe('minor changed from 1 to 2');
      })
    })
  });

  it('should set expected values afeter clicking Major once', () => {
    let repoTag = element(by.tagName('app-version-parent'));
    let newMinorButton = repoTag.all(by.tagName('button')).get(0);
    let newMajorButton = repoTag.all(by.tagName('button')).get(1);
    
    newMajorButton.click().then(()=>{
      let actual = getActual();
      expect(actual.label).toBe('Version: 2.0');
      expect(actual.count).toBe(4);
      expect(actual.logs.get(3).getText()).toBe('major changed from 1 to 2, minor changed from 2 to 0');
    })
  });

  function getActual(){
    let versionTag = element(by.tagName('app-version-child'));
    let label = versionTag.element(by.tagName('h3')).getText();
    let ul = versionTag.element(by.tagName('ul'));
    let logs = ul.all(by.tagName('li'));

    return {
      label: label,
      logs: logs,
      count: logs.count()
    };
  };

  it('should not emit the event initially',()=>{
    let voteLabel = getVoteLabel();
    expect(voteLabel).toBe('Agree: 0, Disagree: 0');
  });

  it('should process agree vote', ()=>{
    let agreeButton = element.all(by.tagName('app-voter')).get(0).all(by.tagName('button')).get(0);
    agreeButton.click().then(()=>{
      let voteLabel = getVoteLabel();
      expect(voteLabel).toBe('Agree: 1, Disagree: 0');
    })
  });

  it('should process disagree vote', ()=>{
    let agreeButton = element.all(by.tagName('app-voter')).get(1).all(by.tagName('button')).get(1);
    agreeButton.click().then(()=>{
      let voteLabel = getVoteLabel();
      expect(voteLabel).toBe('Agree: 1, Disagree: 1');
    })
  })

  function getVoteLabel(){
    return element(by.tagName('app-vote-taker')).element(by.tagName('h3')).getText();
  }
});
