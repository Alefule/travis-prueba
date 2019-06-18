#!/bin/bash

openssl aes-256-cbc -K $encrypted_bb536893562e_key -iv $encrypted_bb536893562e_iv -in deploy_travis.enc -out deploy_travis -d
eval "$(ssh-agent -s)"
chmod 600 deploy_travis 
ssh-add deploy_travis