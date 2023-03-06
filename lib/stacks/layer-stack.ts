import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Code, LayerVersion, Runtime } from "aws-cdk-lib/aws-lambda";

export class LayerStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new LayerVersion(this, "xray-layer", {
      compatibleRuntimes: [Runtime.NODEJS_18_X],
      code: Code.fromAsset("./layers/xray/dist"),
    });
    new LayerVersion(this, "axios-layer", {
      compatibleRuntimes: [Runtime.NODEJS_18_X],
      code: Code.fromAsset("./layers/axios/dist"),
    });
  }
}
