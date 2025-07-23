import { test, expect } from "@playwright/test";

test.describe("PMTool přihlašovací testy", () => {
  test.beforeAll(async () => {
    console.log("Běžím před prvním testem");
  });

  test.beforeEach(async ({ page }) => {
    await page.goto("http://tredgate.com/pmtool/");
  });

  test.afterEach(async ({ page }) => {
    console.log("Běžím po každém testu");
  });

  test.afterAll(async () => {
    console.log("Běžím po posledním testu");
  });

  test("Úspěšné přihlášení", async ({ page }) => {
    await page.locator("#username").fill("playwright_jaro24");
    await page.locator("#password").fill("Playwright!2024");
    await page.locator("//button[@type='submit']").click();
    await expect(page.locator("//h3[@id='welcome-page-header']")).toBeVisible();
  });

  test("Neúspěšné přihlášení", async ({ page }) => {
    await page.locator("#username").fill("random string");
    await page.locator("#password").fill("123454");
    await page.locator("//button[@type='submit']").click();
    await expect(
      page.locator("//div[@class='alert alert-danger']")
    ).toBeVisible();
  });
});
