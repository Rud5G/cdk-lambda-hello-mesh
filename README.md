# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template




### Setup


```shell
nvm install
nvm use

npm install -g aws-cdk

yarn
yarn build
```



### Setup of the project
To login use the tmp credentials from https://<youraccount>.awsapps.com/start#/:
```shell
aws s3 ls
```




```shell
 
export AWS_ACCOUNT_ID="$(aws sts get-caller-identity   | jq -r '.Account')"

echo $AWS_ACCOUNT_ID 
 
cdk bootstrap aws://$AWS_ACCOUNT_ID/eu-central-1 \
    --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess
```





```shell
cdk deploy \
  --progress events
```



```shell
cdk destroy 
  
```
