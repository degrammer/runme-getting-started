#!/usr/bin/env zx

const date = await $`date`
await $`echo Current date is ${date}.`