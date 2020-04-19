import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';
// React recognize automaticly files with .test extentsins and react adds it to the tests.

configure({
    adapter: new Adapter()
});


describe('This is description of the test. <NavigationItems />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    })

    it('should render 2 <NavigationItem /> elements if not authenticated', () => {
        const wrapper = shallow(<NavigationItems />)
        expect(wrapper.find(NavigationItem))
            .toHaveLength(2);
    });

    it('should render 3 <NavigationItem /> elements if  authenticated', () => {
        //const wrapper = shallow(<NavigationItems isAuthenticated />)
        wrapper.setProps({ isAuthenticated: true });
        expect(wrapper.find(NavigationItem))
            .toHaveLength(3);
    });

    it('should render logout button', () => {
        //const wrapper = shallow(<NavigationItems isAuthenticated />)
        wrapper.setProps({ isAuthenticated: true });
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    });
})

