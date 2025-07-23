import { test } from "@playwright/test";

test("Contact Us Cvičení", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/contact.html ");
  await page.locator("#full-name").fill("Josef Nový");
  await page.locator("#email").pressSequentially("petr@example.org");
  await page.locator("#contact-date").fill("2025-07-25");
  await page.locator("#role").selectOption("student");
  await page.locator("#comments").fill("Komentář test");
  await page.locator("#newsletter").check();
  await page.locator('[data-testid="button-submit"]').click();
});
