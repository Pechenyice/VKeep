import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProfileSessions from '../components/ProfileSessions/ProfileSessions';
import Skeleton from '../components/Skeleton/Skeleton';


configure({ adapter: new Adapter() });

describe('Shallow tests: Profile sessions', () => {
    let wrapper;

    const onHover = jest.fn();
    const onLeave = jest.fn();

    describe('hover logic', () => {
        beforeEach(() => {
            wrapper = shallow(<ProfileSessions sessions={{'needFetch': false, 'entities': [
                {
                    'start': 1630000209000,
                    'end': 1630000212000,
                    'platform': 'PC'
                },
                {
                    'start': 1630090214000,
                    'end': 1630090216000,
                    'platform': 'Android'
                },
                {
                    'start': 1630100321000,
                    'end': 1630100326000,
                    'platform': 'Other'
                }
            ]}} onHover={onHover} onLeave={onLeave} />);
        });

        afterEach(() => {
            onHover.mockClear();
            onLeave.mockClear();
        });
    
        it('should trigger hover mock', () => {
            wrapper.find('.onlineSessionWrapper').first().simulate('mouseover');

            expect(
                onHover.mock.calls
            ).toHaveLength(1);
        });

        it('should trigger leave mock', () => {
            wrapper.find('.onlineSessionWrapper').first().simulate('mouseleave');
            
            expect(
                onLeave.mock.calls
            ).toHaveLength(1);
        });
    });

    describe('empty state', () => {
        beforeEach(() => {
            wrapper = shallow(<ProfileSessions sessions={{'needFetch': true, 'entities': []}} onHover={onHover} onLeave={onLeave} />);
        });
    
        it('should display skeletons', () => {
            expect(
                wrapper.find(Skeleton)
            ).toHaveLength(6);
        });
    });

});