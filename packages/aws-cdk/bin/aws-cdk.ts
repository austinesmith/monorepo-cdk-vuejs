#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkStack } from '../lib/aws-cdk-stack';

const app = new cdk.App();

new AwsCdkStack(app, 'AwsCdkStack', {

    // add aws region to app
    env: {
        region: 'us-east-1',
    },

});