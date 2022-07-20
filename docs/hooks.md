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

## useRuxToggle

boolean state with on, off, and toggle functionality

```
const toggle = useRuxToggle(initial: boolean) // set the initial value, default false

//write
toogle.on() // set toggle true
toogle.off() // set toggle false
toogle.toggle() // toggle toggle true => false; false => true

//read
toggle.current()
```
