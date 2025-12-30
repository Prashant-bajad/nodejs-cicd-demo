pipeline {
    agent any
    
    environment {
        ECR_REPO = '590183832380.dkr.ecr.us-east-1.amazonaws.com/nodejs-app'
        AWS_REGION = 'us-east-1'
        APP_SERVER = 'ec2-user@3.235.175.218'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                sh "docker build -t ${ECR_REPO}:${BUILD_NUMBER} ."
                sh "docker tag ${ECR_REPO}:${BUILD_NUMBER} ${ECR_REPO}:latest"
            }
        }
        
        stage('Push to ECR') {
            steps {
                sh """
                    aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_REPO}
                    docker push ${ECR_REPO}:${BUILD_NUMBER}
                    docker push ${ECR_REPO}:latest
                """
            }
        }
        
        stage('Deploy') {
            steps {
                sshagent(['app-server-ssh']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ${APP_SERVER} '
                            aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_REPO}
                            docker pull ${ECR_REPO}:latest
                            docker stop nodejs-app || true
                            docker rm nodejs-app || true
                            docker run -d --name nodejs-app -p 3000:3000 ${ECR_REPO}:latest
                        '
                    """
                }
            }
        }
    }
    
    post {
        success {
            echo '✅ Pipeline completed successfully!'
        }
        failure {
            echo '❌ Pipeline failed!'
        }
    }
}
