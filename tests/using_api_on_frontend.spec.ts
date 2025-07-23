// using_api_on_frontend.spec.ts;
import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test("Registrace uživatele a test Register response", async ({ page }) => {
  const email = faker.internet.exampleEmail();
  const username = faker.internet.username();
  const password = "123456";

  await page.goto("https://tegb-frontend-88542200c6db.herokuapp.com/register");
  await page.locator("//input[@data-testid='username-input']").fill(username);
  await page.locator("//input[@data-testid='email-input']").fill(email);
  await page.locator("//input[@data-testid='password-input']").fill(password);
  const responsePromise = page.waitForResponse(
    "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/register"
  );
  await page.locator("//button[@data-testid='submit-button']").click();
  const response = await responsePromise;
  await page.locator('[data-testid="username-input"]').fill("TEST");
  const responseBody = await response.json();
  expect(responseBody.username).toBe(username);
  expect(responseBody.email).toBe(email);
  expect(responseBody.userId).toBeDefined();
  expect(typeof responseBody.userId).toBe("number");
  expect(responseBody.updatedAt).toBe(null);
  expect(typeof responseBody.active).toBe("number");

  // * testování request částí register API
  const request = response.request();
  const requestBody = await request.postDataJSON();
  expect(requestBody.email).toBe(email);
});
