import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Code, LayerVersion, Runtime } from "aws-cdk-lib/aws-lambda";
import { StringParameter } from "aws-cdk-lib/aws-ssm";

export class LayerStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const packages = ["xray", "axios"];

    packages.forEach((pkg) => {
      const layerVersion = new LayerVersion(this, `${pkg}-layer`, {
        compatibleRuntimes: [Runtime.NODEJS_18_X],
        code: Code.fromAsset(`./packages/${pkg}/dist`),
        description: `${pkg} layer`,
        license: "Example Inc.",
      });

      new StringParameter(this, `${pkg}-layer-arn`, {
        parameterName: `${pkg}-layer-arn`,
        stringValue: layerVersion.layerVersionArn,
      });
    });
  }
}
