// filepath: /C:/Projetos Playwright/cucumber.js
module.exports = {
  default: {
    require: ['tests/step_definitions/*.ts'], // Caminho para os arquivos de definição de passos
    format: ['progress', 'json:reports/cucumber_report.json'],
    parallel: 2,
    publishQuiet: true,
    requireModule: ['ts-node/register'], // Adicione esta linha para registrar o ts-node
  },
};