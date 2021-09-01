import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProfilePage from './../components/ProfilePage/ProfilePage';
import VKeepLogo from '../components/VKeepLogo/VKeepLogo';
import ProfileInfo from '../components/ProfileInfo/ProfileInfo';
import ProfileActivityResizer from '../components/ProfileActivity/ProfileActivityResizer';
import ProfileStatInfo from '../components/ProfileStatInfo/ProfileStatInfo';
import ProfileStatisticManager from '../components/ProfileStatistic/ProfileStatisticManager';
import ProfileSessionsManager from '../components/ProfileSessions/ProfileSessionsManager';
import LayoutManager from '../components/LayoutManager/LayoutManager';
import API from './../api/API';

jest.mock('./../api/API');

configure({ adapter: new Adapter() });

describe('Shallow tests: Profile page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ProfilePage />
    );
  });

  it('has header', () => {
    expect(wrapper.find('header')).toHaveLength(1);
  });

  it('has vkeep logo', () => {
    expect(wrapper.find(VKeepLogo)).toHaveLength(1);
  });

  it('services are managed by <LayoutManager />', () => {
    expect(wrapper.find(LayoutManager)).toHaveLength(4);
  });

  describe('Services implementation', () => {
    it('has <ProfileActivityResizer /> service', () => {
      expect(wrapper.find(ProfileActivityResizer)).toHaveLength(1);
    });

    it('has <ProfileStatInfo /> service', () => {
      expect(wrapper.find(ProfileStatInfo)).toHaveLength(1);
    });

    it('has <ProfileStatisticManager /> service', () => {
      expect(wrapper.find(ProfileStatisticManager)).toHaveLength(1);
    });

    it('has <ProfileSessionsManager /> service', () => {
      expect(wrapper.find(ProfileSessionsManager)).toHaveLength(1);
    });
  });
});
