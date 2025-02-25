// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


// Here, add portions of the warning messages you want to intentionally prevent from appearing
const MESSAGES_TO_IGNORE = [
    "When testing, code that causes React state updates should be wrapped into act(...):",
    "Error:",
    "The above error occurred",
    "Warning: An update to CitySearch inside a test was not wrapped in act(...).",
    "When testing, code that causes React state updates should be wrapped into act(...):",
     "Warning: `ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react`"
  ];
  
  const originalError = console.error.bind(console.error);
  
  console.error = (...args) => {
    const ignoreMessage = MESSAGES_TO_IGNORE.find(message => args.toString().includes(message));
    if (!ignoreMessage) originalError(...args);
  }