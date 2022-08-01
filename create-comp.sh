#!/bin/bash 

# Run this file to create an React Component Boilerplate along with Storybook support
# Run: ./create-comp.sh ...component-names
# E.G ./create-comp.sh Button Modal Menu

# check if at least one arg is given
set -e
if [ "$#" -lt 1 ]
then
echo  "Please insert at least one argument"
exit
else
echo -e "\c"
fi

echo ""

cd "src/components"
for NAME in "$@"
do

  COMPONENT_FILE="$NAME.tsx"
  STORIES_FILE="$NAME.stories.tsx"
  INTERFACE_NAME="${1}Props"

  if [ -d $NAME ]
  then

  echo "Could Not Create Component $NAME"
  echo "Component $NAME already Exists"
  echo ""

  else

  echo "Creating Component $NAME"
  echo "Created $NAME"
  echo ""

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

  cd ..
  fi
done
echo "done"