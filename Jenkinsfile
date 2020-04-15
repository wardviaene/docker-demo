pipeline {
  agent {
    docker {
      image 'node:8-alpine'
      args '-p 3001:3001
-p 3020:27017
'
    }

  }
  stages {
    stage('BUILD') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'node --version
./jenkins/scripts/test.sh'
      }
    }

  }
  environment {
    HOME = '.'
  }
}
