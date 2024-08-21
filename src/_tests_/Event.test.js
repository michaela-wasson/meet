import { render } from '@testing-library/react';
import { useState, useEffect } from "react";
import Event from '../components/Event';
import { getEvents} from '../api';
import userEvent from "@testing-library/user-event";
import mockData from '../mock-data';

describe('<Event /> component', () => {
 let EventComponent;
 const event = mockData[0]

 beforeEach(() => {
   EventComponent = render(<Event event={event} />);
 })

 test('event details hidden by default', () => {
    const eventsDetails = EventComponent.container.querySelector('.details');
    expect(eventsDetails).not.toBeInTheDocument();
 })

 test('render event title', async () => {
    const allEvents = await getEvents();
    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
 })

 test('renders event location', async () => {
    const allEvents = await getEvents(); 
   expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
 });

 test('renders event details button with title show details',  () => { 
    expect(EventComponent.queryByText('show details')).toBeInTheDocument();
});

test('Show details when btn clicked', async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByText('show details');
    await user.click(button);
    const details = EventComponent.container.querySelector('.details');
    expect(details).toBeInTheDocument;
})

test('Hide details when user clicks hide details btn', async () => {
    const user = userEvent.setup();
    let button = EventComponent.queryByText('show details');
    await user.click(button);
    let details = EventComponent.container.querySelector('.details');
    expect(details).toBeInTheDocument();
    //second try?
    button = EventComponent.queryByText('hide details'); 
    await user.click(button); 
    details = EventComponent.container.querySelector('.details');  
    expect(details).not.toBeInTheDocument();
})



});   