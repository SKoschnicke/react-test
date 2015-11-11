#!/bin/sh
docker run -it -p 8000:8000 -v "$PWD":/usr/src/app -w /usr/src/app yeoman /bin/bash
