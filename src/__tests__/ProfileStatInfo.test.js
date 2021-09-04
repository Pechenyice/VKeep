import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProfileStatInfo from '../components/ProfileStatInfo/ProfileStatInfo';


configure({ adapter: new Adapter() });

describe('Shallow tests: Profile aside stats', () => {
    let wrapper;

    describe('some API content is not ready', () => {
        beforeEach(() => {
            wrapper = shallow(<ProfileStatInfo content={{'userInfo': {}, 'sessions': {'needFetch': true, 'entities': []}, 'updates': {}}} />);
        });
    
        it('should render skeletons', () => {
            expect(
                wrapper.find('StatInfoSpec').first().props().fillSkeleton
            ).toBe(true);
        });
    });

    describe('all API content is not ready', () => {
        beforeEach(() => {
            wrapper = shallow(<ProfileStatInfo content={{'userInfo': {}, 'sessions': {'needFetch': true, 'entities': []}, 'updates': {}}} />);
        });
    
        it('should render skeletons', () => {
            expect(
                wrapper.find('StatInfoSpec').first().props().fillSkeleton
            ).toBe(true);
        });
    });
});