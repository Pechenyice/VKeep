import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import HomePageForm from '../components/HomePage/HomePageForm';
import { Link } from "react-router-dom";


configure({ adapter: new Adapter() });

describe('Shallow tests: Home page user form', () => {
    let wrapper;

    const onUserSelected = jest.fn();

    describe('validate input', () => {
        beforeEach(() => {
            wrapper = shallow(<HomePageForm onUserSelected={onUserSelected} />);
        });

        afterEach(() => {
            onUserSelected.mockClear();
        });
    
        describe('user enters 1 symbol', () => {
            beforeEach(() => {
                wrapper.find('input').first().simulate('input', {target: {value: '1'}});
            });

            it('should trigger "too short" error', () => {
                expect(
                    wrapper.find('.errorText').text()
                ).toEqual('Value is too short');
            });

            it('should remove Link', () => {
                expect(
                    wrapper.find(Link)
                ).toHaveLength(0);
            });

            describe('then user enters 2 more symbols', () => {
                beforeEach(() => {
                    wrapper.find('input').first().simulate('input', {target: {value: '123'}});
                });
    
                it('should not trigger error', () => {
                    expect(
                        wrapper.find('.errorText').text()
                    ).toEqual(``);
                });
    
                it('should add Link', () => {
                    expect(
                        wrapper.find(Link)
                    ).toHaveLength(1);
                });

                describe('then user submit form', () => {
                    beforeEach(() => {
                        wrapper.find('button').simulate('click');
                    });
        
                    it('should call onUserSelected', () => {
                        expect(
                            onUserSelected.mock.calls
                        ).toHaveLength(1);
                    });
                });

                describe('then user clear input', () => {
                    beforeEach(() => {
                        wrapper.find('input').first().simulate('input', {target: {value: ''}});
                    });
        
                    it('should trigger "no content" error', () => {
                        expect(
                            wrapper.find('.errorText').text()
                        ).toEqual(`Don't left this field empty please...`);
                    });
        
                    it('should remove Link', () => {
                        expect(
                            wrapper.find(Link)
                        ).toHaveLength(0);
                    });
                });
            });
        });
    });

});