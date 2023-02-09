#!/usr/bin/env zx

const req = await fetch('https://cdn.jsdelivr.net/gh/stateful/vscode-runme/package.json')
const { dependencies } = await req.json()
await $`echo The runme project has ${Object.keys(dependencies).length} dependencies`
