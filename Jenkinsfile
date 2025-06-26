pipeline {
    agent any
    tools {
        nodejs 'NodeJS default'
    }

    parameters{
        string(name:'edge', defaultValue: 'edge' )
    }
    environment {
        ALLURE_RESULTS_DIR = 'allure-results'
        ALLURE_REPORT_DIR = 'allure-report'
    }

    stages {
        stage('Checkout') {
            steps {
                git credentialsId: 'github-token', url: 'https://github.com/ABOLANOSG/Jenkins_KP2.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                powershell 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                if (params.edge = "edge") {
                    catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
                    powershell 'npm test'
                }
            }
        }

        stage('Generate Allure Report') {
            steps {
                powershell 'npx allure generate allure-results --clean -o allure-report'
            }
        }

        stage('Publish Allure Report') {
            steps {
                allure([
                    includeProperties: false,
                    jdk: '',
                    results: [[path: 'allure-results']] 
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