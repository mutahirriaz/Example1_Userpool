#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { UserpoolStack } from '../lib/userpool-stack';

const app = new cdk.App();
new UserpoolStack(app, 'UserpoolStack');
