#!/usr/bin/env node
import "source-map-support";
import * as cdk from "aws-cdk-lib";
import { LayerStack } from "./stacks/layer-stack";

const app = new cdk.App();
new LayerStack(app, "LayerStack");
