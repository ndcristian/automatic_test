

pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh label:'check node verios ...', script:'node -v '
                sh label:'install NPM package...', script:'npm install '
                sh label:'run test...', script:'npx cypress run --spec cypress/integration/alg/model/*.spec.js'
            }
        }
    }
}