pipeline {
    agent any
    stages {
        stage('Build') {
            agent { dockerfile true }
            steps {
                echo "Hello World!"
            }
        }
    }
}