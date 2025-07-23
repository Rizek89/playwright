import { test, expect } from "@playwright/test";

test("Cvičení: validační zprávy - pozitivní test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator('button[type="submit"]').click();
  const usernameError = page.locator("#username-error");
  const passwordError = page.locator("#password-error");
  await expect(usernameError).toBeVisible();
  await expect(usernameError).toHaveText("This field is required!");
  await expect(passwordError).toBeVisible();
  await expect(passwordError).toHaveText("This field is required!");
});

test("Cvičení: validační zprávy - negativní test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  const usernameError = page.locator("#username-error");
  const passwordError = page.locator("#password-error");
  await expect(page.locator(".form-title")).toBeVisible();
  await expect(usernameError).not.toBeVisible();
  await expect(passwordError).not.toBeVisible();
});
