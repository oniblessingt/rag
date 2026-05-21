# AWS Native AI CloudOps Agent

This project is an end-to-end AWS CDK implementation of an AI CloudOps Agent using AWS-native services only.

The agent receives operational, security, and cost events, analyzes them with Amazon Bedrock, retrieves runbook context using Bedrock Knowledge Bases, calls Lambda tools for AWS data, stores incident analysis in DynamoDB, sends notifications through SNS, and routes approved remediation through Step Functions.

## Architecture

```text
CloudWatch / GuardDuty / Security Hub / Cost Events
        |
     EventBridge
        |
 Alert Processor Lambda
        |
 Amazon Bedrock Agent
   |        |        |
Runbook KB  Tools   Remediation Workflow
   |        |        |
S3 + Vector Lambda  Step Functions
        |
DynamoDB + SNS + CloudWatch Dashboard
```

## AWS Services

- Amazon Bedrock Agents
- Amazon Bedrock Knowledge Bases
- Amazon S3
- Amazon OpenSearch Serverless
- AWS Lambda
- Amazon EventBridge
- AWS Step Functions
- Amazon DynamoDB
- Amazon SNS
- Amazon CloudWatch
- AWS GuardDuty
- AWS Security Hub
- AWS Cost Explorer
- AWS Budgets
- AWS CDK

## Local Setup

```bash
npm install
npm run build
npx cdk synth
```

## Bootstrap

```bash
npx cdk bootstrap aws://ACCOUNT_ID/us-east-1
```

## Deploy

```bash
npx cdk deploy --all
```

## Notes

This project is intentionally CDK-first. Do not create resources manually in the AWS Console. All infrastructure should be created, updated, and removed through CDK/CloudFormation.

Before production use, review IAM permissions and restrict resource scopes to your account, regions, and approved resources.
