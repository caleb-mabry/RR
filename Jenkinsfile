node {
    agent { dockerfile true }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {

            steps {
                sh 'node --version'
            }
        }
    }
}