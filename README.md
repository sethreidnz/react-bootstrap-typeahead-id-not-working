# react-bootstrap-typeahead-id-not-working

This is a reproduction of a suspected issue where the `id` property on the `react-bootstrap-typeahead` components are not being applied correctly. I have created some unit tests to show this in the file:

src/App.test.tsx

You can run these by cloning the repo and then running:

```
yarn install
yarn test
```

This should give you 1 successful test, and two failed tests:

- ✓ should be able to access the input component by label
- × should be able to access the Typeahead component by label
- × should be able to access the AsyncTypeahead component by label

As you can see the regular input using `htmlFor` and `id` to have an accessible label works. But the react-bootstrap-typeahead doesn't work.