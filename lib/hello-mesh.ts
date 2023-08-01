import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { LambdaRestApi } from 'aws-cdk-lib/aws-apigateway';

export class HelloMesh extends Construct {
    constructor(scope: Construct, id: string) {
        super(scope, id);
        // const helloFunction = new NodejsFunction(this, 'function');
        // new LambdaRestApi(this, 'apigw-CDK-helloFunction', {
        //     handler: helloFunction,
        // });
        const helloGateway = new NodejsFunction(this, 'gateway');
        new LambdaRestApi(this, 'apigw-CDK-helloGateway', {
            handler: helloGateway,
        });
    }
}
