import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProfileStatistic from '../components/ProfileStatistic/ProfileStatistic';
import Skeleton from '../components/Skeleton/Skeleton';
import ChartTimePlank from '../components/ProfileStatistic/ChartTimePlank';


configure({ adapter: new Adapter() });

describe('Shallow tests: Profile statistic', () => {
    let wrapper;

    describe('empty state', () => {
        beforeEach(() => {
            wrapper = shallow(<ProfileStatistic content={{'needFetch': true, 'entities': []}} platformSelected={''} />);
        });
    
        it('should display skeletons', () => {
            expect(
                wrapper.find(Skeleton)
            ).toHaveLength(1);
        });
    });

    describe('hover logic', () => {
        beforeEach(() => {
            wrapper = shallow(<ProfileStatistic content={{'needFetch': false, 'entities': []}} platformSelected={'PC'} />);
        });

        it('should trigger platform mock', () => {
            expect(
                wrapper.find(ChartTimePlank).first().props().isActive
            ).toBe(true);
        });
    });

});