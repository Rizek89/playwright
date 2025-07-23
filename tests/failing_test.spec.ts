//failing_tests.spec.ts

import { test, expect } from "@playwright/test";

test("Padající test", async ({ page }) => {
  const debug = "Hodnota, kterou chceme vidět v debugMode";
  await page.goto("https://tredgate.com/pmtool/");
  await expect(page.locator("#nonexisting")).toBeVisible();
});
