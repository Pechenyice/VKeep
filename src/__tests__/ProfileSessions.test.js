import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProfileSessions from '../components/ProfileSessions/ProfileSessions';
import Skeleton from '../components/Skeleton/Skeleton';


configure({ adapter: new Adapter() });

describe('Shallow tests: Profile sessions', () => {
    let wrapper;

    const onHover = jest.fn();
    const onLeave = jest.fn();



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