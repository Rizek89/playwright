import { test, expect } from "@playwright/test";

test("toContainText test", { tag: "@githubactions" }, async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator('button[type="submit"]').click();

  // * Kontrola (assert), že daný prvek obsahuje text
  await expect(page.locator("#welcome-page-header")).toContainText(
    "Vítej v testovací aplikaci"
  );

  // * Alternativní zápis assertu (používáme proměnnou s uloženným prvkem):
  const pageHeader = page.locator("#welcome-page-header");
  await expect(pageHeader).toContainText("Vítej v testovací aplikaci");
});

test("toHaveText test", { tag: "@githubactions" }, async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator('button[type="submit"]').click();

  // * Assert, že daný prvek má očekávaný text (1:1)
  await expect(page.locator("#welcome-page-header")).toHaveText(
    "Vítej v testovací aplikaci Tredgate Project"
  );
});

test("toBeVisible test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await expect(page.locator(".login-page-logo img")).toBeVisible();
});

test("toHavePmtool", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  const usernameInput = page.locator("#username");
  await usernameInput.fill("Test");
  await expect(usernameInput).toHaveValue("Test");
});

test("expect.soft test (měkká kontrola)", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await expect.soft(page.locator(".form-title")).toHaveText("Login PMTOOL");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator('button[type="submit"]').click();
});

test("Negativní test: prvek není vidět", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");

  await expect(page.locator("#username")).toBeVisible(); // ? čekáme na zobrazení pole username, abychom si byli jistí, že je aplikace načtená
  // ! Pozor na negativní, vždycky kontrulejte až když máte jistotu, že je aplikace načtená
  await expect(page.locator(".alert")).not.toBeVisible(); // ? Negativní test: varovná zpráva není viditelná
});

/*
Cvičení - testy na nevyplněná pole (⌛10:00):
Vytvořte nový testovací soubor ve složce exercise: pmtool-empty-fields-tests.spec.ts
Vytvoř nový test:
Otevře PMTool
Stiskne tlačítko login bez vyplnění údajů
Zkontroluje, že existují chybové hlášky u inputů
Username error selector: #username-error
Heslo chyba selector: #password-error
Zkontroluje text chyb: This field is required!
Vytvoř další test:
Po otevření PMToolu nejsou vidět chybové hlášky pro pole
Spusťte test

*/
