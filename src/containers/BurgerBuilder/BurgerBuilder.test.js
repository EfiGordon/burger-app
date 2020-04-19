import { BurgerBuilder } from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React recognize automaticly files with .test extentsins and react adds it to the tests.

configure({
    adapter: new Adapter()
});


describe('<BurgerBuilder />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onInitIngredients={() => { }} />);
    })

    it('should render <BuildControls /> elements when receiving ingredients', () => {
        wrapper.setProps({ ings: { salad: 0 } })
        expect(wrapper.find(BuildControls))
            .toHaveLength(1);
    });
})

