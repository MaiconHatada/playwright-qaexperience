import { test, expect } from '@playwright/test';

test('entrar na pagina Mark L', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const inputTaskName = page.locator('#newTask')  // definição de um objeto
  await inputTaskName.fill('conseguir usar o playwright') // step promessa de q irá fazer algo
  await page.click('button[class*=ButtonNewTask]');
    
  const taskText = page.locator('text=conseguir usar o playwright');
  await expect(taskText).toBeVisible();

  await page.waitForTimeout(200)
    
  


  // Expect a title "to contain" a substring.
 // await expect(page).toHaveTitle(/Gerencie suas tarefas com Mark L/);
});

test('deve apagar o registro', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const deleteButton = page.locator('button[class="_listItemDeleteButton_1kgm5_52"]');
  await deleteButton.click();

});


