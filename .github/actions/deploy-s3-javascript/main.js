// npm init -y in deploy-s3-javascript folder
// npm install @actions/core @actions/github @actions/exec // these dependencies are all part of the actions/toolkit
const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')

function run() {
    core.notice('Hello from my custom JavaScript Action!');
}

run();