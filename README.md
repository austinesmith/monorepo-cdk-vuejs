# Demonstration: This project further evolves the [Vue.js to S3 with CDK](https://github.com/austinesmith/cdk-and-vuejs-in-s3) Project into a monolithic repository.

[View: The Result of this Project](http://awscdkstack-websitebucketformonorepodemo082b38ff-14ldkonczygu6.s3-website-us-east-1.amazonaws.com)

This project uses **Yarn Workspaces** and increases portability and further automate the deployment process with scripting.  It switches the package manager from NPM to Yarn to help manage dependencies.

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
  
**5. Git Software Change Management installed *(globally)***
  * [Download: git-scm](https://git-scm.com/downloads)
<br/><br/><br/><br/>


## Deployment Instructions:

**1. Use Git to clone this repository to a local machine**
  * In Git Bash, change the current working directory to the location where this repository should be cloned
  * In the directory run the command: `git clone https://github.com/austinesmith/monorepo-cdk-vuejs`
<br/>

**2. Install dependencies, build the application, and deploy it to AWS with one command**
  * Point the current working directory to `*/monorepo-cdk-vuejs`
  * Then run `yarn` with one of the following commands based on the desired outcome:
    * The command arguments should consist of one the following 5 words or a combination for full automation, with each word representing a step in the deployment process:
      * `yarn install` uses yarn to download and install the required dependencies for the code to run
        * Creates executables for code dependencies in `<project>/node_modules/` directories and `<project>/yarn.lock` files for versioning
      * `yarn build` packages the Vue.js source and assets into an application folder ready for deployment
        * Creates a `*/monorepo-cdk-vuejs/packages/vuejs-app/dist` directory containing web assets and the `*/dist/index.html` needed to access web content
      * `yarn synth` outputs the generated CloudFormation template to stdout for the sake of visibility
        * Allows developers to inspect the outcome of code without having to deploy it
      * `yarn bootstrap` creates the initial stack needed for AWS CDK Toolkit to run and should only be used for a first time CDK deployment
        * Creates a stack before the CDK application with resources necessary for the deployment to run successfully
      * `yarn deploy` the final step that sends the CloudFormation template to the linked AWS account for resource provisioning
        * This is a template structured in `YAML` that strictly defines AWS how to provision resources
    * The following commands are unambiguous and combine the steps to *leverage automation.*  They process their steps in order:
      * `yarn build+synth`
      * `yarn install+build+synth`
      * `yarn synth+deploy`
      * `yarn build+deploy`
      * `yarn install+build+deploy`
      * `yarn install+build+synth+bootstrap+deploy`
      
    * Example:
      * `yarn install`, `yarn build`, or `yarn synth` can be run repeatedly without consequence
        * `yarn deploy` can't be ran more than once without error until reversed by `yarn destroy`
        * `yarn bootstrap` needs to be ran once and only once
<br/><br/><br/><br/>



## Tear Down Instructions:

**1. Reverse all changes made by the deployment and return the AWS account to its original state**
  * In `*/monorepo-cdk-vuejs`, the same root directory used in the previous step, run the command `yarn destroy`
  * The `yarn destroy` command will reverse all the changes made to the AWS account by the other commands, except it will not remove the CloudFormation stack created by `yarn bootstrap`
    * Future `yarn deploy` commands will not need to be bootstrapped until the `yarn bootstrap` stack is deleted
<br/><br/><br/><br/>



# Project Takeaways

### Yarn Workspaces

  * *Monolithic repositories* can make package management more efficient because dependencies are shared between projects and can all be installed/updated at the same time.
  
  * Deployment steps are further simplified with Yarn's tools for package management because a *monolithic repositorie's* root `package.json` can centrally manage scripts that reach other linked projects.
  

### Deployment Automation:

  * The steps for deploying with AWS CDK are much faster and simpler when commands are chained with scripting tools


### Tear Down Automation:

  * Increased efficiency of deploying and tearing down infrastructure combined with finding ways to make services increasingly independent is a key insight behind elastic architectures that are cheaper and better performant than traditional monolithic applications




