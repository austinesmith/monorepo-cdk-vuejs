# Demonstration: This project further evolves the [Vue.js to S3 with CDK](https://github.com/austinesmith/cdk-and-vuejs-in-s3) Project by putting the web application behind a CloudFront Distribution and using Github Actions for continuous deployment.

[View: The Current Status of this Project](http://awscdkstack-websitebucketformonorepodemo082b38ff-14ldkonczygu6.s3-website-us-east-1.amazonaws.com)
<br/><br/>

**This project was created using the following technologies:**
  * Vue.js: as the web application
  * AWS CDK with Typescript: to automate AWS resource provisioning
  * AWS S3: to host the web application
  * AWS CloudFront: as a content delivery network
  * Github Actions: for continuous deployment
  * Yarn: for package management
  * Yarn Workspaces: as a monolithic repository
<br/>

The purpose is to demonstrate an enterprise application using *AWS best practices* as defined by the **AWS Well-Architected Framework**
<br/>[Read: The 5 Pillars of the AWS Well Architected Framework](https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/)
<br/><br/><br/><br/>


# Continuous Deployment

This project is configured to be continuously redeployed on every push to a Github repository

Steps for continuous deployment are defined in the `github-actions.yml` file in the `.github/workflows/` directory
<br/><br/><br/><br/>

## Prerequisites:

**1. An Amazon Web Services account**
<br/><br/>

**2. A Github Account**
<br/><br/>

**3. AWS Account Access Keys**
  * Access keys are created in the AWS management console
  * Access keys must then be added to Github via the Secrets Manager
  * Best practice is to delete the key after configuration for account security
  * [Read: AWS Access Keys](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys)
<br/>
  
**5. Git Software Change Management installed**
  * [Download: git-scm](https://git-scm.com/downloads)
<br/><br/><br/><br/>


## Continuous Deployment Instructions:

**1. Use Git to clone this repository to a local machine**
  * In Git Bash, change the current working directory to the location where this repository should be cloned
  * In the directory run the command: `git clone https://github.com/austinesmith/monorepo-cdk-vuejs`
<br/>

**2. Create new Github repository and add the following *Secrets* to the repository**
  * key: `AWS_ACCESS_KEY_ID`, value: `<your unique access key id`
  * key: `AWS_SECRET_ACCESS_KEY`, value: `<your unique secret access key`
  
**3. Push the project to the newly created repository using Git**
  * The steps for deployment will be added to a *runner* and automatically deployed to the configured AWS account
  * The process can be monitored by clicking the `Actions` tab on the main page of the repository
  * The URL of the web application can be retrieved from the `Run yarn deploy` step
  
<br/><br/><br/><br/>



# Project Takeaways

### Yarn Workspaces

  * *Monolithic repositories* can make package management more efficient because dependencies are shared between projects and can all be installed/updated at the same time.
  
  * Deployment steps are further simplified with Yarn's tools for package management because a *monolithic repositorie's* root `package.json` can centrally manage scripts that reach other linked projects.
  

### Deployment Automation:

  * The steps for deploying with AWS CDK are much faster and simpler when commands are chained with scripting tools


### Tear Down Automation:

  * Increased efficiency of deploying and tearing down infrastructure combined with finding ways to make services increasingly independent is a key insight behind elastic architectures that are cheaper and better performant than traditional monolithic applications




