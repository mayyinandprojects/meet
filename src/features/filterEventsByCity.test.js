import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {
    test('When user hasn’t searched for a city, show upcoming events from all cities.', ({ given, when, then }) => {
        given('user hasn’t searched for any city', () => {

        });

        when('the user opens the app', () => {

        });

        then('the user should see the list of all upcoming events.', () => {

        });
    });

});