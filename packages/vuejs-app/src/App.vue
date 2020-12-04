<template>
  <div id="app" style="max-width:750px; margin:0 auto;">
    <img alt="Amazon Web Services logo" src="./assets/AWS.jpg" class="responsiveaws"><br/>
    <img alt="Cloud Development Kit logo" src="./assets/cdk.png" class="responsive">
    <img alt="Typescript logo" src="./assets/ts.png" class="responsive">
    <img alt="Vue logo" src="./assets/vue.png" class="responsive">
    <img alt="Simple Storage Service logo" src="./assets/s3.png" class="responsive">
    <img alt="Yarn logo" src="./assets/yarn.jpg" class="responsive">
    <img alt="Git logo" src="./assets/git.png" class="responsive">
    <img alt="Visual Studio Code logo" src="./assets/vsc.png" class="responsive">
    <img alt="Github logo" src="./assets/github.png" class="responsive">
    <img alt="CloudFormation logo" src="./assets/cfn.png" class="responsive"><br/><br/>
    

    <HelloWorld msg="This App Was Deployed Using AWS CDK"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.responsive {
  width: 12%;
  height: auto;
  padding: 15px 15px 15px 15px;
}
.responsiveaws {
  width: 55%;
  height: auto;
  padding-bottom: 40px;
}
</style>
