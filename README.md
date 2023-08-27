# Instant - Lean React UI Library

## Getting Started

Install `instant-ui-react` in your project by running `npm install instant-ui-react` if you use NPM or `yarn add instant-ui-react` if you use Yarn.

Wrap your app with the `InstantThemeProvider` component. This will provide styles to all the components you use within your app.

For example:

```
import React from 'react';
import { InstantThemeProvider } from 'instant-ui-react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <InstantThemeProvider>
      <App />
    </InstantThemeProvider>
  </React.StrictMode>
);
```

Then add components to your app by importing them from the package as follows:

```
import React from 'react';
import { Button } from 'instant-ui-react';

export function MyComponent() {
	return (
		<Button text="Awesome Button" primary />
	);
}
```

The library is intended to be as quick and straightforward to use as possible. As a result, it's deliberately opinionated.

To view the available components, head to [instant-ui-react.com](https://instant-ui-react.com).
