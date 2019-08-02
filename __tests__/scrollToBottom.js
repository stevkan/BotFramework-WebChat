import { By } from 'selenium-webdriver';

import { imageSnapshotOptions, timeouts } from './constants.json';

import minNumActivitiesShown from './setup/conditions/minNumActivitiesShown';
import scrollToBottomCompleted from './setup/conditions/scrollToBottomCompleted';
import suggestedActionsShowed from './setup/conditions/suggestedActionsShowed';
import uiConnected from './setup/conditions/uiConnected';

// selenium-webdriver API doc:
// https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebDriver.html

jest.setTimeout(timeouts.test);

test('should stick to bottom if submitting an Adaptive Card while suggested actions is open', async () => {
  const { driver, pageObjects } = await setupWebDriver();

  await driver.wait(uiConnected(), timeouts.directLine);

  await pageObjects.sendMessageViaSendBox('card inputs', { waitForSend: true });
  await driver.wait(minNumActivitiesShown(2), timeouts.directLine);

  await pageObjects.sendMessageViaSendBox('suggested-actions', { waitForSend: true });
  await driver.wait(suggestedActionsShowed(), timeouts.directLine);
  await driver.wait(scrollToBottomCompleted(), timeouts.scrollToBottom);

  const submitButton = await driver.findElement(By.css('button.ac-pushButton:nth-of-type(2)'));

  await submitButton.click();
  await driver.wait(minNumActivitiesShown(5), timeouts.directLine);
  await driver.wait(scrollToBottomCompleted(), timeouts.scrollToBottom);

  const base64PNG = await driver.takeScreenshot();

  expect(base64PNG).toMatchImageSnapshot(imageSnapshotOptions);
});
