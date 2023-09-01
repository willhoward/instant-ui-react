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

## Developer Guide

Contributions are welcome! To get started, clone the project locally and run `yarn install`. Yarn is preferred over npm because it supports [selective version resolutions](https://classic.yarnpkg.com/lang/en/docs/selective-version-resolutions/) (more on this in a minute).

You can produce a production build of the project by running `yarn build`. Parcel will bundle the project and output it to the `/dist` folder.

In order to see changes to components as you're making them, some libraries make use of tools like [Storybook](https://storybook.js.org). This adds a signficant amount of overhead, however, which is not ideal in a project intended to be as lightweight as possible. An easier solution is to link the project and include your local build in a test app. To do this:

* Create a test app, for example by using [Create React App](https://create-react-app.dev) `yarn create react-app [your app name]`;
* Add a `resolutions` field to your `package.json`. This tells Yarn to resolve conflicts between package versions which is necessary in this case due to an ongoing issue with linking packages which include React hooks (more information [here](https://legacy.reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react)).
* Add `react` and `react-dom` to the resolutions field, it should look like this:
```
  "resolutions": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
```
* Run `yarn link` inside your locally cloned `instant-ui-react` project.
* Run `yarn link instant-ui-react` inside your test React app.

Your test app will now serve your local version of the library. When you make a change, simply run `yarn build` in the library directory again. Parcel will build the app in a few seconds or less and your test app will update to reflect your changes.
