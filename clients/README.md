# Clients auto generation

## Requirements
* Min. Java 8 runtime
* Run `npm run generate-openapi-spec` in api folder to create `../api/src/tools/markdown-creator/openApiSpecification.json`

## Generation
* **Javascript Client**: `java -jar swagger-codegen-cli.jar generate -i ../api/src/tools/markdown-creator/openApiSpecification.json -l javascript -o ./javascript`
* **Python Client**: `java -jar swagger-codegen-cli.jar generate -i ../api/src/tools/markdown-creator/openApiSpecification.json -l python -o ./python`