pipeline {
    agent any

    environment {
        PATH = 'C:\\Program Files\\nodejs\\node.exe'
        ALLURE_RESULTS_DIR = 'allure-results'
        ALLURE_REPORT_DIR = 'allure-report'
    }

    stages {
        stage('Checkout') {
            steps {
                git credentialsId: 'github-token', url: 'https://github.com/ABOLANOSG/Jenkins_KP2.git', branch: 'allure_practice'
            }
        }
        stage ('Check Node Version') {
            steps {
                bat 'node -v'
                bat 'npm -v'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Generate Allure Report') {
            steps {
                bat 'npx allure generate allure-results --clean -o allure-report'
            }
        }

        stage('Publish Allure Report') {
            steps {
                publishHTML(target: [
                    reportDir: 'allure-report',
                    reportFiles: 'index.html',
                    reportName: 'Allure Report',
                    keepAll: true
                ])
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline finished.'
        }
        success {
            echo 'Tests Passed!'
        }
        failure {
            echo 'Tests failed'
        }
    }
}