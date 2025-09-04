export const questions = [
  {
    question: "A company plans to use an Amazon Snowball Edge device to transfer files to the AWS Cloud.\nWhich activities related to a Snowball Edge device are available to the company at no cost?",
    options: [
      "A. Use of the Snowball Edge appliance for a 10-day period",
      "B. The transfer of data out of Amazon S3 and to the Snowball Edge appliance",
      "C. The transfer of data from the Snowball Edge appliance into Amazon S3",
      "D. Daily use of the Snowball Edge appliance after 10 days"
    ],
    answer: "C. The transfer of data from the Snowball Edge appliance into Amazon S3"
  },
  {
    question: "A company has deployed applications on Amazon EC2 instances. The company needs to assess application vulnerabilities and must identify infrastructure deployments that do not meet best practices.\nWhich AWS service can the company use to meet these requirements?",
    options: [
      "A. AWS Trusted Advisor",
      "B. Amazon Inspector",
      "C. AWS Config",
      "D. Amazon GuardDuty"
    ],
    answer: "B. Amazon Inspector"
  },
  {
    question: "A company has a centralized group of users with large file storage requirements that have exceeded the space available on premises. The company wants to extend its file storage capabilities for this group while retaining the performance benefit of sharing content locally.\nWhat is the MOST operationally efficient AWS solution for this scenario?",
    options: [
      "A. Create an Amazon S3 bucket for each user. Mount each bucket by using an S3 file system mounting utility.",
      "B. Configure and deploy an AWS Storage Gateway file gateway. Connect each user’s workstation to the file gateway.",
      "C. Move each user’s working environment to Amazon WorkSpaces. Set up an Amazon WorkDocs account for each user.",
      "D. Deploy an Amazon EC2 instance and attach an Amazon Elastic Block Store (Amazon EBS) Provisioned IOPS volume. Share the EBS volume directly with the users."
    ],
    answer: "B. Configure and deploy an AWS Storage Gateway file gateway. Connect each user’s workstation to the file gateway."
  },
  {
    question: "According to security best practices, how should an Amazon EC2 instance be given access to an Amazon S3 bucket?",
    options: [
      "A. Hard code an IAM user’s secret key and access key directly in the application, and upload the file.",
      "B. Store the IAM user’s secret key and access key in a text file on the EC2 instance, read the keys, then upload the file.",
      "C. Have the EC2 instance assume a role to obtain the privileges to upload the file.",
      "D. Modify the S3 bucket policy so that any service can upload to it at any time."
    ],
    answer: "C. Have the EC2 instance assume a role to obtain the privileges to upload the file."
  },
  {
    question: "Which option is a customer responsibility when using Amazon DynamoDB under the AWS Shared Responsibility Model?",
    options: [
      "A. Physical security of DynamoDB",
      "B. Patching of DynamoDB",
      "C. Access to DynamoDB tables",
      "D. Encryption of data at rest in DynamoDB"
    ],
    answer: "C. Access to DynamoDB tables"
  },
  {
    question: "Which option is a perspective that includes foundational capabilities of the AWS Cloud Adoption Framework (AWS CAF)?",
    options: [
      "A. Sustainability",
      "B. Performance efficiency",
      "C. Governance",
      "D. Reliability"
    ],
    answer: "C. Governance"
  },
  {
    question: "A company is running and managing its own Docker environment on Amazon EC2 instances. The company wants an alternative to help manage cluster size, scheduling, and environment maintenance.\nWhich AWS service meets these requirements?",
    options: [
      "A. AWS Lambda",
      "B. Amazon RDS",
      "C. AWS Fargate",
      "D. Amazon Athena"
    ],
    answer: "C. AWS Fargate"
  },
  {
    question: "A company wants to run a NoSQL database on Amazon EC2 instances.\nWhich task is the responsibility of AWS in this scenario?",
    options: [
      "A. Update the guest operating system of the EC2 instances.",
      "B. Maintain high availability at the database layer.",
      "C. Patch the physical infrastructure that hosts the EC2 instances.",
      "D. Configure the security group firewall."
    ],
    answer: "C. Patch the physical infrastructure that hosts the EC2 instances."
  },
  {
    question: "Which AWS services or tools can identify rightsizing opportunities for Amazon EC2 instances? (Choose two.)",
    options: [
      "A. AWS Cost Explorer",
      "B. AWS Billing Conductor",
      "C. Amazon CodeGuru",
      "D. Amazon SageMaker",
      "E. AWS Compute Optimizer"
    ],
    answer: ["A. AWS Cost Explorer", "E. AWS Compute Optimizer"]
  },
  {
    question: "Which of the following are benefits of using AWS Trusted Advisor? (Choose two.)",
    options: [
      "A. Providing high-performance container orchestration",
      "B. Creating and rotating encryption keys",
      "C. Detecting underutilized resources to save costs",
      "D. Improving security by proactively monitoring the AWS environment",
      "E. Implementing enforced tagging across AWS resources"
    ],
    answer: ["C. Detecting underutilized resources to save costs", "D. Improving security by proactively monitoring the AWS environment"]
  },
  {
    question: "Which of the following is an advantage that users experience when they move on-premises workloads to the AWS Cloud?",
    options: [
      "A. Elimination of expenses for running and maintaining data centers",
      "B. Price discounts that are identical to discounts from hardware providers",
      "C. Distribution of all operational controls to AWS",
      "D. Elimination of operational expenses"
    ],
    answer: "A. Elimination of expenses for running and maintaining data centers"
  },
  {
    question: "A company wants to manage deployed IT services and govern its infrastructure as code (IaC) templates.\nWhich AWS service will meet this requirement?",
    options: [
      "A. AWS Resource Explorer",
      "B. AWS Service Catalog",
      "C. AWS Organizations",
      "D. AWS Systems Manager"
    ],
    answer: "B. AWS Service Catalog"
  },
  {
    question: "Which AWS service or tool helps users visualize, understand, and manage spending and usage over time?",
    options: [
      "A. AWS Organizations",
      "B. AWS Pricing Calculator",
      "C. AWS Cost Explorer",
      "D. AWS Service Catalog"
    ],
    answer: "C. AWS Cost Explorer"
  },
  {
    question: "A company is using a central data platform to manage multiple types of data for its customers. The company wants to use AWS services to discover, transform, and visualize the data.\nWhich combination of AWS services should the company use to meet these requirements? (Choose two.)",
    options: [
      "A. AWS Glue",
      "B. Amazon Elastic File System (Amazon EFS)",
      "C. Amazon Redshift",
      "D. Amazon QuickSight",
      "E. Amazon Quantum Ledger Database (Amazon QLDB)"
    ],
    answer: ["A. AWS Glue", "D. Amazon QuickSight"]
  },
  {
    question: "A global company wants to migrate its third-party applications to the AWS Cloud. The company wants help from a global team of experts to complete the migration faster and more reliably in accordance with AWS internal best practices.\nWhich AWS service or resource will meet these requirements?",
    options: [
      "A. AWS Support",
      "B. AWS Professional Services",
      "C. AWS Launch Wizard",
      "D. AWS Managed Services (AMS)"
    ],
    answer: "B. AWS Professional Services"
  },
  {
    question: "An e-learning platform needs to run an application for 2 months each year. The application will be deployed on Amazon EC2 instances. Any application downtime during those 2 months must be avoided.\nWhich EC2 purchasing option will meet these requirements MOST cost-effectively?",
    options: [
      "A. Reserved Instances",
      "B. Dedicated Hosts",
      "C. Spot Instances",
      "D. On-Demand Instances"
    ],
    answer: "D. On-Demand Instances"
  },
  {
    question: "A developer wants to deploy an application quickly on AWS without manually creating the required resources.\nWhich AWS service will meet these requirements?",
    options: [
      "A. Amazon EC2",
      "B. AWS Elastic Beanstalk",
      "C. AWS CodeBuild",
      "D. Amazon Personalize"
    ],
    answer: "B. AWS Elastic Beanstalk"
  },
  {
    question: "A company is storing sensitive customer data in an Amazon S3 bucket. The company wants to protect the data from accidental deletion or overwriting.\nWhich S3 feature should the company use to meet these requirements?",
    options: [
      "A. S3 Lifecycle rules",
      "B. S3 Versioning",
      "C. S3 bucket policies",
      "D. S3 server-side encryption"
    ],
    answer: "B. S3 Versioning"
  },
  {
    question: "Which AWS service provides the ability to manage infrastructure as code?",
    options: [
      "A. AWS CodePipeline",
      "B. AWS CodeDeploy",
      "C. AWS Direct Connect",
      "D. AWS CloudFormation"
    ],
    answer: "D. AWS CloudFormation"
  },
  {
    question: "An online gaming company needs to choose a purchasing option to run its Amazon EC2 instances for 1 year. The web traffic is consistent, and any increases in traffic are predictable. The EC2 instances must be online and available without any disruption.\nWhich EC2 instance purchasing option will meet these requirements MOST cost-effectively?",
    options: [
      "A. On-Demand Instances",
      "B. Reserved Instances",
      "C. Spot Instances",
      "D. Spot Fleet"
    ],
    answer: "B. Reserved Instances"
  }
];

