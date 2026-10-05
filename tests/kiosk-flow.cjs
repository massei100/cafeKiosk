const assert = require('node:assert/strict');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require('playwright');

async function run() {
  const browser = await chromium.launch({ headless: true, executablePath: process.env.KIOSK_BROWSER_EXECUTABLE || undefined, args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  const url = process.env.KIOSK_URL || pathToFileURL(path.resolve(__dirname, '../index.html')).href;
  await page.goto(url);
  assert.equal(await page.locator('.store-card').count(), 3);
  const catalog = await page.evaluate(() => S);
  let images = 0;
  const checkImages = async selector => {
    for (const image of await page.locator(selector).all()) {
      await image.scrollIntoViewIfNeeded();
      await image.evaluate(image => image.decode());
      assert.ok(await image.evaluate(image => image.naturalWidth > 0));
      images++;
    }
  };
  await checkImages('.store-card img');
  const enter = async key => {
    await page.locator(`.store-card[onclick="enter('${key}')"]`).click();
    assert.equal(await page.locator('#pay').isDisabled(), true);
  };
  const add = async (category, index = 0, choices = []) => {
    await page.locator('#catlist').getByRole('button', { name: category, exact: true }).click();
    await page.locator('.item').nth(index).click();
    for (const choice of choices) await page.locator('.opt').getByText(choice, { exact: true }).click();
    await page.locator('#add').click();
  };
  const payCard = async () => {
    await page.locator('#pay').click();
    await page.locator('#card').click();
    await page.getByRole('button', { name: '카드 결제 완료', exact: true }).click();
  };
  const payCash = async () => {
    await page.locator('#pay').click();
    await page.locator('#cashm').click();
    let amount = await page.evaluate(() => total());
    for (const value of [10000, 5000, 1000, 500, 100, 50, 10]) {
      while (amount >= value) {
        await page.locator(`.cash button[onclick="addMoney(${value})"]`).click();
        amount -= value;
      }
    }
    assert.equal(amount, 0);
    assert.equal(await page.locator('#cashPayBtn').isEnabled(), true);
    await page.locator('#cashPayBtn').click();
  };

  for (const [key, shop] of Object.entries(catalog)) {
    await enter(key);
    for (const [category, items] of Object.entries(shop.cats)) {
      await page.locator('#catlist').getByRole('button', { name: category, exact: true }).click();
      assert.equal(await page.locator('.item').count(), items.length);
      await checkImages('.item img');
    }
    await add(Object.keys(shop.cats)[0]);
    await page.locator('#take').click();
    await payCard();
    assert.ok((await page.locator('.receipt').innerText()).includes('포장'));
    assert.equal(await page.locator('#pay').isDisabled(), true);
    // Closing a successful receipt must never leave a payable old order.
    await page.locator('.x').click();
    assert.equal(await page.locator('.crow').count(), 0);
    assert.equal(await page.locator('#pay').isDisabled(), true);
    await add(Object.keys(shop.cats)[0]);
    await payCash();
    const receipt = await page.locator('.receipt').innerText();
    assert.ok(receipt.includes('현금') && receipt.includes('낸 금액') && receipt.includes('거스름돈'));
    // The backdrop is another valid receipt dismissal path.
    await page.locator('.overlay').click({ position: { x: 5, y: 5 } });
    assert.equal(await page.locator('.crow').count(), 0);
    await page.getByRole('button', { name: '← 가게 선택' }).click();
  }
  assert.equal(images, 52); // 3 shop heroes + 49 menu photos, including unverified existing files.

  await enter('cafe');
  await add('커피', 0, ['HOT', '큰 사이즈 +500원']);
  assert.equal(await page.locator('#total').innerText(), '4,500원');
  await add('커피', 0, ['HOT', '큰 사이즈 +500원']);
  assert.equal(await page.locator('.crow').count(), 1);
  assert.equal(await page.locator('#total').innerText(), '9,000원');
  await add('커피');
  assert.equal(await page.locator('.crow').count(), 2); // Different options stay separate.
  await page.locator('.crow').last().getByRole('button', { name: '−', exact: true }).click();
  await page.locator('.crow').first().getByRole('button', { name: '−', exact: true }).click();
  assert.equal(await page.locator('#total').innerText(), '4,500원');
  await page.locator('#pay').click(); await page.locator('#cashm').click();
  assert.equal(await page.locator('#cashPayBtn').isDisabled(), true);
  await page.locator('.cash button[onclick="addMoney(5000)"]').click();
  assert.ok((await page.locator('#cashHint').innerText()).includes('너무 많이'));
  assert.equal(await page.locator('#cashPayBtn').isDisabled(), true);
  await page.getByRole('button', { name: '하나 취소', exact: true }).click();
  assert.equal(await page.locator('#paid').innerText(), '0원');
  await page.locator('.cash button[onclick="addMoney(1000)"]').click();
  assert.ok((await page.locator('#cashHint').innerText()).includes('3,500원 더'));
  await page.getByRole('button', { name: '다시 내기', exact: true }).click();
  for (let i = 0; i < 4; i++) await page.locator('.cash button[onclick="addMoney(1000)"]').click();
  await page.locator('.cash button[onclick="addMoney(500)"]').click();
  await page.locator('#cashPayBtn').click();
  assert.ok((await page.locator('.r-option').innerText()).includes('HOT · 큰 사이즈'));
  await page.getByRole('button', { name: '처음으로', exact: true }).click();

  await enter('burger');
  await add('세트', 0, ['사이다']);
  assert.ok((await page.locator('.copt').innerText()).includes('사이다'));
  await page.getByRole('button', { name: '← 가게 선택' }).click();
  await enter('bunsik'); await add('떡볶이', 0, ['순한맛']);
  assert.ok((await page.locator('.copt').innerText()).includes('순한맛'));
  await page.getByRole('button', { name: '← 가게 선택' }).click();

  // Exercise generated missions through actual menu/checkout UI.
  await enter('cafe'); await page.locator('#missionBtn').click();
  let target = await page.evaluate(() => mission);
  const fulfill = async target => {
    for (const name of target.items) {
      for (const [category, items] of Object.entries(catalog.cafe.cats)) {
        const index = items.findIndex(item => item.n === name);
        if (index >= 0) await add(category, index);
      }
    }
    await page.locator(target.ot === '매장' ? '#dine' : '#take').click();
  };
  await fulfill(target);
  await page.locator(target.ot === '매장' ? '#take' : '#dine').click();
  if (target.pay === '카드') await payCard(); else await payCash();
  assert.equal(await page.locator('.receipt').count(), 0);
  assert.ok((await page.locator('.result.bad').innerText()).includes('주문'));
  await page.getByRole('button', { name: '주문 수정하기' }).click();
  assert.ok(await page.locator('.crow').count() > 0);
  await page.locator(target.ot === '매장' ? '#dine' : '#take').click();
  if (target.pay === '카드') await payCard(); else await payCash();
  assert.ok((await page.locator('.result.ok').innerText()).includes('미션 성공'));
  await page.locator('.x').click();
  assert.equal(await page.locator('.crow').count(), 0);
  for (let i = 0; i < 20; i++) {
    await page.getByRole('button', { name: '새 미션', exact: true }).click();
    target = await page.evaluate(() => mission);
    assert.ok(target.items.length >= 1 && target.items.length <= 2);
    assert.equal(new Set(target.items).size, target.items.length);
  }
  // Wrong method and quantity must also retain the order without a success receipt.
  await fulfill(target);
  if (target.pay === '카드') await payCash(); else await payCard();
  assert.equal(await page.locator('.receipt').count(), 0);
  await page.locator('.x').click();
  await page.locator('.crow').first().getByRole('button', { name: '+', exact: true }).click();
  if (target.pay === '카드') await payCard(); else await payCash();
  assert.ok((await page.locator('.result.bad').innerText()).includes('수량'));
  await page.locator('.x').click();
  await page.getByRole('button', { name: '← 가게 선택' }).click();

  // A genuinely missing photo shows a label, never an arbitrary replacement.
  await enter('cafe');
  await page.evaluate(() => { S.cafe.cats['커피'][0].img = 'assets-final/does-not-exist.webp'; renderMenu(); });
  await page.locator('.item').first().locator('.image-unavailable').waitFor();
  await page.locator('.item').first().click();
  await page.locator('.detail .image-unavailable').waitFor();
  await page.locator('#add').click();
  await page.getByRole('button', { name: '← 가게 선택' }).click();

  await page.setViewportSize({ width: 820, height: 1180 });
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
  await enter('burger');
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
  if (process.env.KIOSK_SCREENSHOT) {
    await page.screenshot({ path: process.env.KIOSK_SCREENSHOT, fullPage: true });
  }
  assert.deepEqual(errors, []);
  console.log('PASS: three stores, 49 photos, options, cart, card/cash, receipt lifecycle, mission success/retry, tablet layout');
  await browser.close();
}
run().catch(error => { console.error(error); process.exit(1); });
