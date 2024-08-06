What the app is:

A progressive web app with the ability to work offline and a serverless backend developed using a TDD technique that allows users to use it whenever they want to view upcoming events for a specific city.

User stories for this app:

As a user, I should be able to filter events by city so that I can see a list of events taking place in that city.
As a user, I should be able to edit events so I can show or hide event details.
As a user, I should be able to edit my user page so I can specify the number of events shown
As a user, I should be able to switch on offline mode so that I can use the app without wifi
As a user, I should be able to add an app shortcut to the home screen so I can access the app more easily.
As a user, I should be able to click on an event so that I can see charts that help me visualize event details.
User scenarios for this app:

Given user hasn’t searched for any city; When the user opens the app; Then the user should see a list of upcoming events.

Given the main page is open; When user starts typing in the city textbox; Then the user should receive a list of cities (suggestions) that match what they’ve typed.

Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing; When the user selects a city (e.g., “Berlin, Germany”) from the list; Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

Given user wants to edit events, when a user selects an event, then event details should be hidden.

Given user has selected a city AND the city events are displayed, when a user chooses a number of events they wished displayed, then events over that number should be hidden.

Given user does not have access to wifi, when user open apps, then offline mode should be loaded.

Given user has created an app shortcut, when the user is on their home screen, then the app shortcut should be displayed.

Given user has selected a city AND the city events are displayed, when a user clicks on an event, then a chart with event details should open.
