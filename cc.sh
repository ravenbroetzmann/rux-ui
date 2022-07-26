#!/bin/bash   

### THIS FILES CREATES THE BOILERPLATE FOR A REACT + STORYBOOK COMPONENTS

# VARS
NAME="${1}"
COMPONENT_FILE="$NAME.tsx"
STORIES_FILE="$NAME.stories.tsx"
INTERFACE_NAME="${1}Props"

echo "creating $NAME ..."

# Create folder for Component
cd "src/components"
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