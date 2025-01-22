import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('que navego para a página de login', async ({page}) => {
  await page.goto('http://localhost:3000/');
});

When('preencho o nome da tarefa', async ({page}) => {
  const inputTaskName = page.locator('#newTask');
  await inputTaskName.fill('conseguir usar o playwright');
  await page.click('button[class*=ButtonNewTask]');
});

Then('devo ver a nova tarefa', async ({page}) => {
  const taskText = page.locator('text=conseguir usar o playwright');
  await expect(taskText).toBeVisible();
});