# preact-redux-typescript

Toy project to play with Preact in combination with Redux and Typescript.

## Development

```
yarn install
yarn build
open index.html
```

## Memo

- If components are `connect`ed, their props are changed such that redux store props are available.
  So far this is not well reflected in the typescript code.

  In case the following code is being used the interface `MyComponentProps` should include definitions of the props 
  that are merged from the redux store. 
  But if those props are included, they are also available when creating an component instance, which is not ideal
  and should be avoided, because they are not part the public API of the component.

  ```typescript
  @connect(reducers, bindActions(actions))
  export default class MyComponent extends Component<MyComponentProps, {}> {
    // ...
  }
  ```

  A possible solution is to create a second interface that extends the first one and is being used for the render
  method `props` argument.

  ```typescript
  interface MyComponentConnectedProps extends MyComponentProps {
    // ...
  }

  @connect(reducers, bindActions(actions))
  export default class MyComponent extends Component<MyComponentProps, {}> {
    render(props: MyComponentConnectedProps) {
      // use `props` instead of `this.props` when accessing properties that have been merged from the store
    }
  }
  ```
  