import ProfilePage from '../src/components/ProfilePage/ProfilePage';
import React from 'react';
import { shallow } from 'enzyme';

describe('Profile page', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(
        <ProfilePage />
      );
    });
  
    it('us <ProfilePage /> instance', () => {
        expect(wrapper).toMatchElement(<ProfilePage />);
    });
  
});