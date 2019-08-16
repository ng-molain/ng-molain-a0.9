#!/bin/bash

readonly thisDir=$(cd $(dirname $0); pwd)

cd $(dirname $0)/../..

DIST="$(pwd)/dist"
ROOT=${DIST}/libs

# is snapshot mode, if true, should override the same version
SNAPSHOT=false
for ARG in "$@"; do
    case "$ARG" in
        --snapshot)
            SNAPSHOT=true
            ;;
    esac
done
echo "Use snapshot mode ${SNAPSHOT}"

VERSION=$(node -p "require('./package.json').version")
echo "Prev version ${VERSION}"

# 1. patch version and git tag
# npm version 0.8.0-beta.7 -m "Release version %s"
# VERSION=$(node -p "require('./package.json').version")
# echo "Current version ${VERSION}"

# 2. build libs
# npm run libs:build

# 3. fix libs package versions
# VERSION=0.8.0-beta.05
echo "Fix all libs version with '${VERSION}'"

fixLibsVersion() {
    (cd ${ROOT}; for p in `ls .`; do sed -i "s/0\.0\.0-PLACEHOLDER/${VERSION}/g" ${p}/package.json; done)
}
# echo "Fixed all libs version to ${VERSION}"
fixLibsVersion

# 4. publish on npm.parim.net
publishToParim() {
    (cd ${ROOT}; for p in `ls .`; do npm publish $p --registry http://npm.parim.net; done)
}

publishToParim