# Get parameters from SSM parameter store via NodeJS

This script retrieves the following parameter types:
- String
- StringList
- SecureString

## Tested on
[NodeJS v20.2.0](https://nodejs.org/en/blog/release/v20.2.0)

## Run
To run the script:
```bash
npm install
node index.js
```

## References
1. [Migrating your code to SDK for JavaScript V3](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/migrating-to-v3.html) 
2. [Secure and Centralized Config Management: A Node.js Workshop on AWS SSM Parameter Store](https://brain2life.hashnode.dev/secure-and-centralized-config-management-a-nodejs-workshop-on-aws-ssm-parameter-store)