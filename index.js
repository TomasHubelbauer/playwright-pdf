const playwright = require('playwright');
const path = require('path');

void async function () {
  const browser = await playwright.firefox.launch({ headless: false });
  try {
    const page = await browser.newPage();
    await page.goto('file://' + path.join(__dirname, 'demo.pdf'));

    // Wait for all the pages to load before capturing the screenshot
    await page.waitForFunction(() => {
      const pageDivs = [...document.querySelectorAll('div.page[data-page-number]')];
      document.title = pageDivs.filter(pageDiv => pageDiv.dataset.loaded === 'true').length + '/' + pageDivs.length;
      return pageDivs.length > 0 && pageDivs.every(pageDiv => pageDiv.dataset.loaded === 'true');
    });

    await page.screenshot({ path: path.join(__dirname, 'screenshot.png') });
    await browser.close();
  }
  finally {
    await browser.close();
  }
}()
