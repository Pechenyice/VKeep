import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProfileStatistic from '../components/ProfileStatistic/ProfileStatistic';
import Skeleton from '../components/Skeleton/Skeleton';
import ChartTimePlank from '../components/ProfileStatistic/ChartTimePlank';


configure({ adapter: new Adapter() });

describe('Shallow tests: Profile statistic', () => {
    let wrapper;

    describe('hover logic', () => {
        beforeEach(() => {
            wrapper = shallow(<ProfileStatistic content={{}} platformSelected={'PC'} />);
        });

        it('should trigger platform mock', () => {
            expect(
                wrapper.find(ChartTimePlank).first().props().isActive
            ).toBe(true);
        });
    });

    // describe('empty state', () => {
    //     beforeEach(() => {
    //         wrapper = shallow(<ProfileSessions sessions={{'needFetch': true, 'entities': []}} onHover={onHover} onLeave={onLeave} />);
    //     });
    
    //     it('should display skeletons', () => {
    //         expect(
    //             wrapper.find(Skeleton)
    //         ).toHaveLength(6);
    //     });
    // });

});