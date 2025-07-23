import { test, expect } from "@playwright/test";

test("Cvičení: API kontroly", async ({ request }) => {
  const response = await request.patch(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train"
  );
  const responseBody = await response.json();

  expect(typeof responseBody.timestamp).toBe("string");
  expect(responseBody.id).toBe(1);
});
