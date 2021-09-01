import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProfileInfo from '../components/ProfileInfo/ProfileInfo';
import PlatformPoint from '../components/PlatformPoint/PlatformPoint';


configure({ adapter: new Adapter() });

describe('Shallow tests: Profile info', () => {
    let wrapper;

    describe('Without platform', () => {
        beforeEach(() => {
            wrapper = shallow(<ProfileInfo platform={''}/>);
        });
    
        it('should not display online', () => {
            expect(
                wrapper.find(<PlatformPoint />)
            ).toHaveLength(0);
        });
    });

    describe('With platform', () => {
        let platform = 'PC';

        beforeEach(() => {
            wrapper = shallow(<ProfileInfo platform={platform}/>);
        });
    
        it('should display online', () => {
            expect(
                wrapper.find('.platformPointWrapper')
            ).toHaveLength(1);
        });
    });
});