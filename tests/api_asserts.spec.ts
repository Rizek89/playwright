// api_asserts.spec.ts

import { test, expect } from "@playwright/test";

test("Kontrola response status kódu: 200", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop",
    {
      params: {
        userId: 12,
      },
    }
  );
  expect(response.status()).toBe(200);
});

test("Kontrola response hlavičky Content-Type", async ({ request }) => {
  const response = await request.patch(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train"
  );
  const headers = response.headers();
  const contentTypeHeader = headers["content-type"];
  console.log("Uložená hlavička: " + contentTypeHeader);
  expect(contentTypeHeader).toBe("application/json; charset=utf-8");
});

test("Kontrola response body", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/4"
  );
  const responseBody = await response.json();

  // * Kontrola, že v body existuje property createdAt
  expect(responseBody.createdAt, "body.createdAt is defined").toBeDefined();

  // * Kontrola, že v userId v body je number (číslo)
  expect(typeof responseBody.userId).toBe("number");

  // * Kontrola, že email v body je petr.fifka@tredgate.cz
  expect(responseBody.email).toBe("petr.fifka@tredgate.cz");
});
