import { test } from "@playwright/test";

test("First test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool"); // Navigate to the page, await ceka na dokonceni
  await page.locator("#username").fill("cypress_zima_2024"); // Fill in the username, pagelocator indentikuje prvek a fill vyplni text
  await page.locator("#password").fill("Playwright!2024");
});
