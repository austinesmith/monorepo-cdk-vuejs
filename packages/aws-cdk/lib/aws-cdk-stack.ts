import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as s3Deployment from '@aws-cdk/aws-s3-deployment';
import { CfnOutput } from '@aws-cdk/core';
// install cmd: 'npm i @aws-cdk/aws-s3-deployment'

export class AwsCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    // create bucket
    const myBucket = new s3.Bucket(this, "WebsiteBucketForMonoRepoDemo", {
      // allow bucket to access to public internet
      publicReadAccess: true,
      // switched RemovalPolicy.RETAIN retains the bucket in s3
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "index.html"
    });

    // create deployment resource
    // constructs new instance of BucketDeployment class
    const deployment = new s3Deployment.BucketDeployment(this, "deployStaticWebsite", {
      // directory of the web asset
      sources: [s3Deployment.Source.asset("../vuejs-app/dist")],
      // (experimental) The S3 bucket to sync the contents of the zip file to.)
      destinationBucket: myBucket
   });

   // return for website URL
   new CfnOutput(this, "URL", {
     description: "publicly accessible url",
     value: myBucket.bucketWebsiteUrl
   });
  }
}
