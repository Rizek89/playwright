// tags_tests.spec.ts

import { test } from "@playwright/test";

test("Označkovaný regresní test @regression", async ({ page }) => {
  console.log("Regresní test");
});

test(
  "Označkovaný smoke test",
  {
    tag: "@smoke",
  },
  async ({ page }) => {
    console.log("Smoke Test");
  }
);

test.describe("Označkovaná testovací sada", { tag: "@suite" }, () => {
  test("Test v suite 1", async ({ page }) => {
    console.log("Suite 1");
  });

  test("Test v suite 2", async ({ page }) => {
    console.log("Suite 2");
  });
});
