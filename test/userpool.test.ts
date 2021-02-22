import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Userpool from '../lib/userpool-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Userpool.UserpoolStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
