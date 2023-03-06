import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Architecture, Code, LayerVersion, Runtime } from "aws-cdk-lib/aws-lambda";

export class LayerStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new LayerVersion(this, "TestLayer", {
      compatibleRuntimes: [Runtime.NODEJS_18_X],
      code: Code.fromAsset("./dist/aws-xray-sdk"),
      compatibleArchitectures: [Architecture.X86_64],
    });
  }
}