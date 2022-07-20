# Hooks

## useRuxState

just a diffrent syntax for useState

### Usage

```
// init the State, default value has to have the given Type
const state = useRuxState<Type>(defaultValue)

// set the State value has to have Type
state.set(value: Type)

// get the value, the value has the type Type
const value: Type = state.get()
```
