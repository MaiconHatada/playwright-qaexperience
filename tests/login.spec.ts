import { test, expect } from '@playwright/test';
import { BASE_URL } from '../config';


test.beforeEach(async ({ page }) => {
  await page.goto(BASE_URL);
});
test('1.entrar na pagina Mark L', async ({ page }) => {
  const inputTaskName = page.locator('#newTask')  // definição de um objeto
  await inputTaskName.fill('conseguir usar o playwright') // step promessa de q irá fazer algo
  await page.click('button[class*=ButtonNewTask]');
    
  const taskText = page.locator('text=conseguir usar o playwright'); // definição de um objeto
  await expect(taskText).toBeVisible();

    
});


test('2.deve apagar o registro', async ({ page }) => {
  const deleteButton = page.locator('button[class="_listItemDeleteButton_1kgm5_5299S"]'); // definição de um objeto
  await deleteButton.click();

});



