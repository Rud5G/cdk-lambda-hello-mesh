import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { HelloMesh } from "./hello-mesh";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class HelloMeshStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'HelloQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    new HelloMesh(this, 'hello-mesh');
  }
}


