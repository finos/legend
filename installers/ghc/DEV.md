# Development

## Build
npm run build

## Synth
cdk synth

## Deploy
cdk deploy

## Deploy (Auth)
*Note: First change LegendAwsApp to use LegendAwsStackWithAuth*

cdk deploy --parameters CognitoDomainPrefix=**{change-this}** --parameters AdminPassword=**{change-this}**

## Cleanup
cdk destroy