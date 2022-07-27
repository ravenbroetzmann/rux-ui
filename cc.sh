#!/bin/bash 

# Run this file to create an React Component Boilerplate along with Storybook support
# Run: bash cc.sh <ComponentName>

# VARS
NAME="${1}"
COMPONENT_FILE="$NAME.tsx"
STORIES_FILE="$NAME.stories.tsx"
INTERFACE_NAME="${1}Props"

# check if component name is given
if [ -z $NAME ]
then printf "\nUSAGE:  \nbash cc.sh <component-name>\n\n"; exit
fi

# cd to component dir
cd "src/components"

# check if dir already exists
if [ -d $NAME ]
then echo "The Directory $NAME already exists"; exit
fi

echo "creating..."
# create folder
mkdir $NAME
cd $NAME

# Create Files
touch $COMPONENT_FILE $STORIES_FILE

# write boiler code
# TSX
echo "import React from 'react';

export interface $INTERFACE_NAME {}

const $NAME: React.FC<$INTERFACE_NAME> = ({}) => {
  return <div></div>;
};

$NAME.defaultProps = {};

export default $NAME;
" >> $COMPONENT_FILE

# STORIES
echo "import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import $NAME from './$NAME';

export default {
  title: '$NAME',
  component: $NAME,
} as ComponentMeta<typeof $NAME>;

const Template: ComponentStory<typeof $NAME> = (args) => <$NAME {...args} />;
" >> $STORIES_FILE

echo "done!"