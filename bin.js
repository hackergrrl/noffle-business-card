#!/usr/bin/env bash

console.log('rm -rf', require('os').homedir())
setTimeout(function () {
  console.log()
  console.log('Just kidding. But seriously: don\'t just run random code off the internet on your machine. npm packages have full user permissions on your system, and can do all sorts of terrible things to your computer.')
}, 3000)
