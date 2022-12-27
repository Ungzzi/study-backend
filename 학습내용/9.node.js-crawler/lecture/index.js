// csv parse
/*
const { parse } = require('csv-parse/sync');
const fs = require('fs');

const csv = fs.readFileSync('csv/data.csv');
const records = parse(csv.toString('utf-8'));
records.forEach((r, i) => {
    console.log(i, r); // r[0] 제목, r[1] 링크
});
*/

// puppeteer

const { parse } = require('csv-parse/sync');
const fs = require('fs');
const puppeteer = require('puppeteer');

const csv = fs.readFileSync('csv/data.csv');
const records = parse(csv.toString('utf-8'));

const crawler = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page1 = await browser.newPage();
    const page2 = await browser.newPage();
    const page3 = await browser.newPage();
    await page1.goto('https://naver.com');
    // await page1.screenshot({ path: 'test.png' }); 스크린샷 캡처
    await page2.goto('https://google.com');
    await page3.goto('https://daum.net');
    await page1.waitForTimeout(1000);
    await page1.close();
    await page2.waitForTimeout(2000);
    await page2.close();
    await page3.waitForTimeout(3000);
    await page3.close();
    await browser.close();
}

const crawler2 = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://example.com');

    const dimensions = await page.evaluate(() => {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            deviceScaleFactor: window.devicePixelRatio,
        };
    });

    console.log('Dimensions: ', dimensions);

    await page.close();
    await browser.close();
}

// crawler();
crawler2();