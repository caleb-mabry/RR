pipeline {
environment {
registry = "razenay/ripping-resource"
registryCredential = 'dockerhub-official'
dockerImage = ''
}
agent any
stages {
stage('Cloning Repository') {
steps {
git 'https://github.com/caleb-mabry/RR'
}
}
stage('Build Image') {
steps{
script {
dockerImage = docker.build registry + ":latest"
}
}
}
stage('Push Image') {
steps{
script {
docker.withRegistry( '', registryCredential ) {
dockerImage.push()
}
}
}
}
stage('Remove Image') {
steps{
sh "docker rmi $registry:latest"
}
}
}
}