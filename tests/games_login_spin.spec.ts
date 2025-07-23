import { test, expect } from "@playwright/test";

test("Login na casino.ifortuna.cz", async ({ page }) => {
  await page.goto("https://casino.ifortuna.cz");

  // Akceptuj cookies
  await page.locator("#cookie-consent-button-accept").click();

  // Klikni na tlačítko 'Přihlásit se'
  await page.locator("#login-btn").click();

  // Počkej na zobrazení login okna (input pro username)
  await expect(page.locator("#login-dialog-app")).toBeHidden();

  // Vyplň přihlašovací údaje
  await page.locator("input#login-dialog-input-name").fill("testPTcz11");
  await page.locator("input#login-dialog-input-password").fill("Fortuna1");

  // Odešli formulář
  await page.locator("#login-dialog-sign-in").click();

  // Ověř, že login proběhl - ignoruj část s číslem
  await expect(
    page.getByRole("button", {
      name: /testPTcz11\s+\d{1,3}(?:[.,]\d{2})?\s*Kč/,
    })
  ).toBeVisible();

  // Naviguj do sekce "Providers"
  await page.getByRole("link", { name: "Navštivte Výrobci Výrobci" }).click();

  // Počekej na načtení stránky Výrobci (např. nadpis nebo logo)
  await expect(
    page.getByRole("link", { name: "Tech4Bet ikona žetonu" })
  ).toBeVisible();
});
