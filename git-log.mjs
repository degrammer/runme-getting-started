#!/usr/bin/env zx

let flags = [
    '--oneline',
    '--decorate',
    '--color',
  ]
  await $`git log ${flags}`