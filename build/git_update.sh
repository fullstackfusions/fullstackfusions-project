#!/bin/bash

VERSION=""

# Determine the version bump from the latest commit message
LATEST_COMMIT_MSG=$(git log -1 --pretty=%B)

if [[ $LATEST_COMMIT_MSG == *"[major]"* ]]; then
  VERSION="major"
elif [[ $LATEST_COMMIT_MSG == *"[minor]"* ]]; then
  VERSION="minor"
elif [[ $LATEST_COMMIT_MSG == *"[patch]"* ]]; then
  VERSION="patch"
else
  echo "No version bump keyword ([major], [minor], [patch]) found in the latest commit message."
  exit 0
fi

# get highest tag number, and add v0.1.0 if doesn't exist
git fetch --prune --unshallow 2>/dev/null
CURRENT_VERSION=$(git describe --tags $(git rev-list --tags --max-count=1))

if [[ $CURRENT_VERSION == '' ]]
then
  CURRENT_VERSION='v0.0.0'
fi
echo "Current Version: $CURRENT_VERSION"

# replace . with space so can split into an array
CURRENT_VERSION_PARTS=(${CURRENT_VERSION//./ })

# remove the 'v' character from the version parts
VNUM1=${CURRENT_VERSION_PARTS[0]:1}
VNUM2=${CURRENT_VERSION_PARTS[1]}
VNUM3=${CURRENT_VERSION_PARTS[2]}

# set default values if any part is missing
VNUM1=${VNUM1:-0}
VNUM2=${VNUM2:-0}
VNUM3=${VNUM3:-0}

if [[ $VERSION == 'major' ]]
then
  VNUM1=$((VNUM1+1))
  VNUM2=0
  VNUM3=0
elif [[ $VERSION == 'minor' ]]
then
  VNUM2=$((VNUM2+1))
  VNUM3=0
elif [[ $VERSION == 'patch' ]]
then
  VNUM3=$((VNUM3+1))
fi

# create new tag
NEW_TAG="v$VNUM1.$VNUM2.$VNUM3"
echo "($VERSION) updating $CURRENT_VERSION to $NEW_TAG"

# get current hash and see if it already has a tag
GIT_COMMIT=$(git rev-parse HEAD)
NEEDS_TAG=$(git describe --contains $GIT_COMMIT 2>/dev/null)

# only tag if no tag already
if [ -z "$NEEDS_TAG" ]; then
  echo "Tagged with $NEW_TAG"
  git tag $NEW_TAG
  git push --tags
  git push
else
  echo "Already a tag on this commit"
fi

echo ::set-output name=git-tag::$NEW_TAG

exit 0
