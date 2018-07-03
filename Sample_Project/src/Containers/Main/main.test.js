import React from 'react';
import Main from './main';
import { mount,shallow,configure   } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe('Main component renders the list correctly', () => {
	let wrapper;
	beforeEach(() => {
		const persons = [
		    {
		        "name": "John",        
		        "city": "New York",
		        "age": 30,
		        "gender": "Male"
		    },
		    {
		        "name": "Matthew",        
		        "city": "California",
		        "age": 40,
		        "gender": "Male"
		    },
		    {
		        "name": "William",        
		        "city": "Illinois",
		        "age": 34,
		        "gender": "Male"
		    },
		    {
		        "name": "Edward",        
		        "city": "Texas",
		        "age": 31,
		        "gender": "Male"
		    },
		    {
		        "name": "Timothy",        
		        "city": "Pennsylvania",
		        "age": 45,
		        "gender": "Male"
		    },
		    {
		        "name": "Jason",        
		        "city": "Arizona",
		        "age": 23,
		        "gender": "Male"
		    },
		    {
		        "name": "Daniel",        
		        "city": "Texas",
		        "age": 16,
		        "gender": "Male"
		    },
		    {
		        "name": "George",        
		        "city": "California",
		        "age": 22,
		        "gender": "Male"
		    },
		    {
		        "name": "Frank",        
		        "city": "Indiana",
		        "age": 26,
		        "gender": "Male"
		    }
		]
        wrapper = shallow(<Main />);
     	wrapper.setState({persons:persons});
  });
  it('renders correctly', () => {
    expect(wrapper.find('tr.rowcontent').length).toEqual(9);    
  });
  it('check first element updated correctly', () => {    
    expect(wrapper.find('tr.rowcontent td').first().text()).toEqual('John');    
  });

  it('change state to one user', () => { 
  	wrapper.setState({persons:[{
        "name": "Frank",        
        "city": "Indiana",
        "age": 26,
        "gender": "Male"
    }]});
    expect(wrapper.find('tr.rowcontent').length).toEqual(1); 
  });

  it('change state and update the state with new values', () => { 
  	wrapper.setState({persons:[{
        "name": "Frank",        
        "city": "Indiana",
        "age": 26,
        "gender": "Male"
    }]});
    wrapper.setState({persons:[{
        "name": "Frank1",        
        "city": "Indiana",
        "age": 26,
        "gender": "Male"
    }]});
    wrapper.update();
    expect(wrapper.find('tr.rowcontent td').first().text()).toEqual('Frank1'); 
  });
});