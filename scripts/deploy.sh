#!/bin/bash
COMMAND="cd ${REMOTE_PATH} && git pull"
ssh -o StrictHostKeyChecking=no -i deploy_travis -v ${REMOTE_USER}@${REMOTE_HOST} ${COMMAND}  