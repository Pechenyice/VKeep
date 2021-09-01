import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProfileActivity from '../components/ProfileActivity/ProfileActivity';


configure({ adapter: new Adapter() });

describe('Shallow tests: Profile activity', () => {
    let wrapper;
    const onResize = jest.fn();

    describe('resize logic', () => {
        beforeEach(() => {
            wrapper = shallow(<ProfileActivity content={{}} onResize={onResize} size={false} />);
        });

        afterEach(() => {
            onResize.mockClear();
        });
    
        it('should trigger prop resize function', () => {
            wrapper.find('.more').simulate('click');

            expect(
                onResize.mock.calls
            ).toHaveLength(1);
        });
    });

    describe('empty state', () => {
        beforeEach(() => {
            wrapper = shallow(<ProfileActivity content={{}} />);
        });
    
        it('should display skeletons', () => {
            expect(
                wrapper.find('.skeletonsWrapper')
            ).toHaveLength(1);
        });
    });

    describe('with data state', () => {
        beforeEach(() => {
            wrapper = shallow(<ProfileActivity content={{'names': [], 'statuses': [], "avatars": []}} />);
        });
    
        it('should display skeletons', () => {
            expect(
                wrapper.find('.skeletonsWrapper')
            ).toHaveLength(0);
        });
    });
});