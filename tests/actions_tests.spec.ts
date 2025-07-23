// actions_tests.spec.ts
import { expect, test } from "@playwright/test";

test("Click test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator('button[type="submit"]').click(); // ? click() kliká na identifikovaný prvek levým tlačítkem
});

test("Fill a pressSequentially test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("START");
  await page.locator("#username").fill("End");
  await page.locator("#username").pressSequentially("Kde toto bude?");
  // .pressSequentially("Kde toto bude?", { delay: 500 }); // ? použití vlasností (nepovinných) pro metodu - delay = zpoždění mezi jednotlivými úhozy do klávesnice
});

test("Select test", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/registration.html");
  await page.locator("#gender").selectOption("male"); // ? Výběr ze select prvku pomocí option a value atributu
  await page.locator("#gender").selectOption({ label: "Female" }); // ? Výběr ze select prvku pomocí option a jejího textu
});

test("Radio, Checkbox check test", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/registration.html");
  // * Radio button
  await page.locator("#contact-phone").check();
  // * Checkbox button
  await page.locator("#interests-music").check(); // ? Zakliknutí checkboxu
  await page.locator("#interests-music").uncheck(); // ? Odkliknutí checkboxu
});

/*
Cvičení: vyplň a odešli contact us formulář (⌛10:00):
Vytvoř nový test soubor ve složce exercise: webtrain_contact_us_exercise.spec.ts
Vytvoř nový test: Contact Us Cvičení
Otevři Webtrain Contact Us
https://tredgate.com/webtrain/contact.html 
Vyplň všechna pole včetně checkboxů a radio buttonů
Date of Contact vyplňte ve formátu: “YYYY-MM-DD” (metoda fill)
Klikni na odeslání formuláře
Spusť test

Lokátory:
Full name: #full-name
Email address: #email
Date of Contact: #contact-date
Role: #role
Comments: #comments
Subscribe to newsletter: #newsletter
Submit: [data-testid="button-submit"]
*/

test("iFrame test", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/web-actions.html");
  // await page.locator("#name").fill("Jméno v iFrame"); // ! toto nebude fungovat, prvek je v iFrame
  const frame = await page.frameLocator(
    '[data-testid="test-automation-iframe"]'
  ); // ? pomocí metody frameLocator se přepínáme do iFrame na stránce a následně ukládáme do proměnné frame.
  await frame.locator("#name").fill("Jména v iFrame"); // ? používáme frame proměnnou, která v sobě drží data o iFrame v Playwright

  await page.locator(".hold-button").click(); // ? Po dokončení práce v iFrame (chci pokračovat v původní stránce mimo iFrame), použijeme page objekt
});

test("Hover test", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/web-actions.html");
  await page.locator('[data-testid="hover-box"]').hover();
  await expect(page.locator('[data-testid="hover-message"]')).toBeVisible();
});
