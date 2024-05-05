const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://65.0.127.54:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - Sample',
	    'sonar.projectKey':'NodeJsMithunTechnologies',
	    'sonar.login': 'squ_db28d2ac4203e26f2c48c54d7b66b33f57321092',
	    //'sonar.login': 'admin',
	    //'sonar.password': 'admin',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
