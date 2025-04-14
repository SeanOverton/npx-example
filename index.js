#!/usr/bin/env node
const yargs = require('yargs');

const getProjectName = async () => {
    let projectName = yargs.argv.name;

    if (!projectName) {
        const rl = createInterface();
        projectName = await askQuestion(rl, 'Enter project name: ');
        rl.close();
    }

    return projectName;
};

const readline = require('readline');

const createInterface = () => {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
};

const askQuestion = (rl, question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

const main = async () => {
    const projectName = await getProjectName();
};

main().catch(console.error);
