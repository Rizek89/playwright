//test_steps.spec.ts
// tests/
import { expect, test } from "@playwright/test";

test("Seskupování testovacích kroků", async ({ page }) => {
  await test.step("Přihlašení Pmtool", async () => {
    await page.goto("https://tredgate.com/pmtool");
    await page.locator("#username").fill("playwright_jaro24");
    await page.locator("#password").fill("Playwright!2024");
    await page.locator('button[type="submit"]').click();
  });
  await test.step("Otevření Projects", async () => {
    await page.locator("#Projects").click();
    await expect(page.locator(".table-scrollable table")).toBeVisible();
  });
  await test.step("Otevření vytváření nového projektu", async () => {
    await page.locator('[test_id="Add Project"]').click();
  });
  await test.step("Kontrola struktury formuláře pro přidání projektu", async () => {
    await expect(page.locator('div[data-testid="Name"] input')).toBeVisible();
    await expect(page.locator("button[type='submit']")).toHaveText("Save");
  });
});
