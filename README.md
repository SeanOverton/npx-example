# Building a npx cmd
Reference: https://getstream.io/blog/npx-script-project-setup/
Good article regarding JS scripts, automating project setup in
a real dev friendly way including parsing project files and
updating values.

## Why npx commands?
Can allow running packages without installing them. Also used for bootstrapping projects, eg. create-react-app and the like.

## To publish:
- bump the version in package.json `npm version patch`
- then publish to npm registry: `npm publish`

## To run:
`npx npx-cmd`
