import { test } from "@playwright/test";
import { faker } from "@faker-js/faker";

test("Provolání GET requestu", async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/train");
});

test("GET request s parametrem", async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/eshop", {
    params: {
      userId: 12,
    },
  });
});

test("Použití hlaviček v requestu", async ({ request }) => {
  await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train/header",
    {
      headers: {
        train: "Testujeme hlavicky",
      },
    }
  );
});

test("Provolání POST requestu s Body a použitím faker.js", async ({
  request,
}) => {
  await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/register",
    {
      data: {
        email: faker.internet.exampleEmail(),
        username: faker.internet.username(),
        password: "123456",
      },
    }
  );
});

test("Předávání dat mezi requesty", async ({ request }) => {
  const regResponse = await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/register",
    {
      data: {
        email: faker.internet.exampleEmail(),
        username: faker.internet.username(),
        password: "123456",
      },
    }
  );
  const regResponseBody = await regResponse.json();
  const userId = regResponseBody.userId;
  console.log("UserId: " + userId);
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/eshop", {
    params: {
      userId: userId,
    },
  });
});

/*
Cvičení (⌛10:00):
Vytvořte volání API v Playwright:
Složka: projekt/tests/exercises
Test: regres_in_register_test.spec.ts
Request:
Metoda: POST
URL: https://reqres.in/api/register
Body (data):
{
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}
Hlavičky (nezapomínejte dávat do uvozovek):
Accept-Encoding: gzip, deflate, br
x-api-key: reqres-free-v1


*/
