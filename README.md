# Demonstration: This project further evolves the [Vue.js to S3 with CDK](https://github.com/austinesmith/cdk-and-vuejs-in-s3) Project into a monolithic repository.

This project uses **Yarn Workspaces** to increase portability and further automate the deployment with scripting.  It switches the package manager from NPM to Yarn to increase portability.

The files included in this repository along with the following instructions will allow the reader to automate the deployment of a web application to s3 with one command.

The purpose is to demonstrate the AWS best practice of **Operational Excellence** by performing *operations as code* as defined by the **AWS Well-Architected Framework**
<br/>[Read: The 5 Pillars of the AWS Well Architected Framework](https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/)
<br/><br/><br/><br/>


# Project Instructions

## Prerequisites:

**1. An Amazon Web Services account**
<br/><br/>

**2. AWS CLI Tools installed**
  * [Download: AWS CLI Tools](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
<br/>

**3. AWS access keys configured for AWS account authentication**
  * Access keys are created in the AWS management console
  * Access keys must then be added to the AWS CLI tools by running the global command: `aws configure`
  * Best practice is to delete the key after configuration for account security
  * [Read: Access Keys with AWS CLI Tools](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)
<br/>

**4. Yarn (Yet Another Resource Navigator) Package Manager installed *(globally)***
  * [Download: Yarn](https://classic.yarnpkg.com/en/docs/install/)
<br/>
  
**5. Git Software Change Management installed*(globally)***
  * [Download: git-scm](https://git-scm.com/downloads)
<br/><br/><br/><br/>


## Deployment Instructions:

**1. Use Git to clone this repository to a local machine**
  * In Git Bash, change the current working directory to the location where this repository should be cloned
  * In the directory run the command: `git clone https://github.com/austinesmith/monorepo-cdk-vuejs`
<br/>

**2. Install dependencies, build the application, and deploy to AWS with one command**
  * Point the working directory to `*/monorepo-cdk-vuejs`
  * Then modify the following command according for the preferred outcome `yarn install+build+synth+bootstrap+deploy`
    * The command consists of 5 words representing different steps of the deployment process:
      * `install` uses yarn to download and install the required dependencies for the code to run
        * Creates executables for code dependencies in `<project>/node_modules/` directories and `<project>/yarn.lock` files for versioning
      * `build` packages the Vue.js source and assets into an application folder ready for deployment
        * Creates a `*/monorepo-cdk-vuejs/packages/vuejs-app/dist` directory containing web assets and the `*/dist/index.html` needed to access web content
      * `synth` outputs the generated CloudFormation template to standout for only for the sake of visibility
        * Allows developers to inspect the outcome of code without having to deploy it
      * `bootstrap` creates the initial stack needed for AWS CDK Toolkit to run and should only be used for a first time CDK deployment
        * Creates a stack before the CDK application with resources necessary for the deployment to run successfully
      * `deploy` the final step that sends the CloudFormation template to the linked AWS account for resource provisioning
        * This is a template structured in `YAML` that strictly defines AWS how to provision resources
        
    * Any combination of these words can be removed from the command as long as all the following conditions are met:
      1. The arguments passed to the `yarn` command consist of 1-5 of the above words
      2. The order of the words is maintained exactly as shown above 
      3. None of the words are repeated
      4. Every word is separated by the `+` symbol
    * The command will preserve order and process every word as an individual step
    * The command will not move on to the next step unless the previous step completes successfully
      * Which means if a step fails, every step prior to the failed step will have completed successfully
      
    * Examples:
      * `yarn install+synth+deploy` 
        * is syntactically correct
        * but will fail if either build or bootstrap haven't been ran yet
      * `yarn install`, `yarn build`, or `yarn synth` can be run repeatedly without consequence
        * `yarn deploy` can't be ran more than once until reversed by `yarn destroy`
        * `yarn bootstrap` needs to be ran once and only once
<br/><br/><br/><br/>



## Tear Down Instructions:

**1. Reverse all changes made by the deployment and return the AWS account to its original state**
  * In `*/monorepo-cdk-vuejs`, the same root directory used in the previous step, run the command `yarn destroy`
  * The `yarn destroy` command will reverse all the changes made to the AWS account by the other commands, except it will not remove the CloudFormation stack created by `yarn bootstrap`
    * Future CDK deployments will not need to be bootstrapped until the `yarn bootstrap` stack is deleted
<br/><br/><br/><br/>



# Project Takeaways

### Yarn Workspaces

  * Monolithic repositories can make package management more efficient because developers share dependencies between projects and update many of them at the same time.
  
  * Steps are even further simplified with Yarn's tools for dependency resolution and package management
  

### Deployment Automation:

  * The steps for deploying with AWS CDK are much faster and simpler when commands are chained with scripting tools


### Tear Down Automation:

  * The speed of deploying and tearing down infrastructure combined with finding ways to make services increasingly independent is a key inspiration behind the elastic architectures of cloud computing that are cheaper and better performant than traditional monolithic applications




