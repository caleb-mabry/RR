pipeline {
    agent none
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            agent { dockerfile true }
            steps {
                sh 'node --version'
            }
        }
    }
}