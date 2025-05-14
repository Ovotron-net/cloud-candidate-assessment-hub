
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const awsQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Which AWS service is used for storing and retrieving any amount of data from the web?",
    options: ["EC2", "S3", "RDS", "DynamoDB"],
    correctAnswer: 1,
    explanation: "Amazon S3 (Simple Storage Service) is an object storage service that offers industry-leading scalability, data availability, security, and performance for storing and retrieving any amount of data."
  },
  {
    id: 2,
    question: "Which AWS service provides resizable compute capacity in the cloud?",
    options: ["Lambda", "EC2", "ECS", "EKS"],
    correctAnswer: 1,
    explanation: "Amazon EC2 (Elastic Compute Cloud) provides scalable computing capacity in the AWS cloud, allowing you to launch virtual servers as needed."
  },
  {
    id: 3,
    question: "Which AWS service is a managed NoSQL database?",
    options: ["RDS", "Redshift", "DynamoDB", "Aurora"],
    correctAnswer: 2,
    explanation: "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability."
  },
  {
    id: 4,
    question: "Which AWS service enables you to run code without provisioning or managing servers?",
    options: ["EC2", "Elastic Beanstalk", "Lambda", "Fargate"],
    correctAnswer: 2,
    explanation: "AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume."
  },
  {
    id: 5,
    question: "Which service would you use to deploy a containerized application?",
    options: ["EC2", "ECS", "S3", "RDS"],
    correctAnswer: 1,
    explanation: "Amazon Elastic Container Service (ECS) is a fully managed container orchestration service that makes it easy to run, stop, and manage Docker containers on a cluster."
  },
  {
    id: 6,
    question: "Which AWS service provides a virtual network dedicated to your AWS account?",
    options: ["Internet Gateway", "VPC", "Route 53", "Direct Connect"],
    correctAnswer: 1,
    explanation: "Amazon Virtual Private Cloud (VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define."
  },
  {
    id: 7,
    question: "Which AWS service is used for creating and managing AWS resources through templates?",
    options: ["Systems Manager", "CloudFormation", "OpsWorks", "Config"],
    correctAnswer: 1,
    explanation: "AWS CloudFormation provides a common language to describe and provision all the infrastructure resources in your cloud environment using templates."
  },
  {
    id: 8,
    question: "Which AWS service is used for real-time processing of streaming data?",
    options: ["Kinesis", "SQS", "SNS", "EventBridge"],
    correctAnswer: 0,
    explanation: "Amazon Kinesis makes it easy to collect, process, and analyze real-time, streaming data so you can get timely insights and react quickly to new information."
  },
  {
    id: 9,
    question: "Which AWS service is a managed relational database service?",
    options: ["DynamoDB", "DocumentDB", "RDS", "ElastiCache"],
    correctAnswer: 2,
    explanation: "Amazon Relational Database Service (RDS) makes it easy to set up, operate, and scale a relational database in the cloud."
  },
  {
    id: 10,
    question: "Which AWS service provides a hybrid storage service that enables your on-premises applications to seamlessly use AWS cloud storage?",
    options: ["S3", "Storage Gateway", "EFS", "FSx"],
    correctAnswer: 1,
    explanation: "AWS Storage Gateway is a hybrid cloud storage service that gives you on-premises access to virtually unlimited cloud storage."
  },
  {
    id: 11,
    question: "Which AWS service would you use to host a static website?",
    options: ["EC2", "S3", "Lightsail", "Elastic Beanstalk"],
    correctAnswer: 1,
    explanation: "Amazon S3 can be used to host static websites. Just enable the static website hosting feature and upload your content."
  },
  {
    id: 12,
    question: "Which AWS service provides a DNS web service?",
    options: ["CloudFront", "Route 53", "Global Accelerator", "API Gateway"],
    correctAnswer: 1,
    explanation: "Amazon Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service."
  },
  {
    id: 13,
    question: "Which AWS service would you use for monitoring your AWS resources?",
    options: ["Inspector", "CloudWatch", "Trusted Advisor", "Shield"],
    correctAnswer: 1,
    explanation: "Amazon CloudWatch is a monitoring and observability service that provides data and actionable insights for AWS resources."
  },
  {
    id: 14,
    question: "Which AWS service provides a way to create and manage AWS resources through an API?",
    options: ["CloudFormation", "SDK", "CLI", "API Gateway"],
    correctAnswer: 3,
    explanation: "Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale."
  },
  {
    id: 15,
    question: "Which AWS service is used for creating and managing Docker containers?",
    options: ["ECR", "ECS", "EKS", "Fargate"],
    correctAnswer: 0,
    explanation: "Amazon Elastic Container Registry (ECR) is a fully-managed Docker container registry that makes it easy to store, manage, and deploy Docker container images."
  }
];
