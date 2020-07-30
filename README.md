# ReactFlix

## Imersão Alura React

In the project directory, you can run:

### `yarn start`

--

## For this activity, remove these files:

- setupTests.js
- serviceWorker.js
- App.css
- logo.svg
- App.test.js

# Additionals files

[Extra Files](https://gist.github.com/omariosouto/19dafd5ca155c46b3dcb31df89cfba55)

# Install Styled component

```sh
$ yarn add styled-components
```

# Install React Router Dom
```sh
$ yarn add react-router-dom
```
# Configuration React-Router-Dom
```js
import { BrowserRouter }  from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

# React Fragment ou <>
```js
function PageDefault({ children }) {
  return (
    <React.Fragment>
      <Menu />
        <Main>
        { children }
        </Main>
      <Footer />
    </React.Fragment>
  )
}
```

ou, somente com o <>
```js
function PageDefault({ children }) {
  return (
    <>
      <Menu />
        <Main>
        { children }
        </Main>
      <Footer />
    </>
  )
}
```
