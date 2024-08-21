//src/number of events test
import NumberofEvents from '../components/NumberofEvents';
import {render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {getEvents} from '../api';


describe('<NumberofEvents /> component', () => {
    let NumberofEventsComponent;
    beforeEach(() => {
      NumberofEventsComponent = render(<NumberofEvents />);
    });

    test('renders text input', () => {
        const eventsTextBox = NumberofEventsComponent.queryByRole('textbox');
        expect(eventsTextBox).toBeInTheDocument();
        expect(eventsTextBox).toHaveClass('event');
      });

    test ( 'value of text field is 32', () => {
        const eventsTextBox = NumberofEventsComponent.queryByRole('textbox');
        expect(eventsTextBox).toHaveValue('32');
    })

    test('value of text field changes when user types', () => {
        
        const eventsTextBox = NumberofEventsComponent.queryByRole('textbox');

        fireEvent.change(eventsTextBox, {target: {value: ''}}); 
        expect(eventsTextBox.value).toBe('');
        fireEvent.change(eventsTextBox, {target: {value: '4'}});
        expect(eventsTextBox.value).toBe('4')
    })



});

