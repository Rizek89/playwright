import { test, expect } from "@playwright/test";

test("Cvičení: asserty", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator('button[type="submit"]').click();
  await page.locator("#Projects").click();
  await expect(page.locator(".table-scrollable table")).toBeVisible();
  await page.locator('[test_id="Add Project"]').click();
  await expect(page.locator('div[data-testid="Name"] input')).toBeVisible();
  await expect(page.locator("button[type='submit']")).toHaveText("Save");
});
