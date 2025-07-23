import { test } from "@playwright/test";

test.skip(
  "skip this test",
  {
    annotation: {
      type: "issue",
      description: "https://github.com/microsoft/playwright/issues/23180",
    },
  },
  async ({ page }) => {
    // This test is not run
  }
);

// ! Only je jen pro vývojové prostředí, nikdy se nesmí dostat do sdíleného prostředí (např. git)
// test.only("Spustí se jen tento test", async ({ page }) => {
//   console.log("běží jen tento test");
// });
