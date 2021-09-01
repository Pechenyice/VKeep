import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import VKeepLogo from '../components/VKeepLogo/VKeepLogo';

configure({ adapter: new Adapter() });

describe('Shallow tests: VKeep logo', () => {
    let wrapper;

    describe('VKeep logo without hint', () => {
        beforeEach(() => {
            wrapper = shallow(<VKeepLogo logoFontSize={36} displayHint={false} />);
        });
    
        it('should not display hint', () => {
            expect(
                wrapper.find('p')
            ).toHaveLength(0);
        });
    });

    describe('VKeep logo with hint', () => {
        let hintSize = 14;
        
        beforeEach(() => {
            wrapper = shallow(<VKeepLogo logoFontSize={36} displayHint={true} hintFontSize={hintSize} />);
        });
    
        it('should display hint', () => {
            expect(
                wrapper.find('p')
            ).toHaveLength(1);
        });

        it('should have correct hint font size', () => {
            expect(
                wrapper.find('p').first().props().style
            ).toHaveProperty('fontSize', `${hintSize}px`);
        });
    });
});