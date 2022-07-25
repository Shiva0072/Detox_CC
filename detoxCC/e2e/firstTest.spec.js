describe('Example', () => {
  before(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('Should have a hello text', async () => {
    await expect(element(by.id('title'))).toBeVisible();
  });

  const typedtext = 'hello Shivam';
  it('Should type something', async () => {
    await element(by.id('input')).typeText(typedtext);
  });

  it('Should press on the submit button ', async () => {
    await element(by.id('button')).tap();
  });

  it('Should have a alert with typed test', async () => {
    // console.log('here = ', element(by.text(typedtext)).atIndex(0));
    await expect(element(by.text(typedtext)).atIndex(0)).toBeVisible();
    await element(by.text('OK')).tap();
  });
});
