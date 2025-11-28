const scanner = require('sonarqube-scanner');

scanner({
  serverUrl : 'http://localhost:9000',
  options: {
    'sonar.projectKey': 'proyecto-github',
    'sonar.sources': '.',
    'sonar.tests': '.',
    'sonar.inclusions': 'index.js',
    'sonar.test.inclusions': 'index.test.js',
    'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
    'sonar.login': 'admin',
    'sonar.password': '18188930_Omen' 
  }
}, () => process.exit());
