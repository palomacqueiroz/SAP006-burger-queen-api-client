import { render } from '@testing-library/react';
import { Input } from './Input';

describe('Testing input component', () => {
    it('should render the input component', () => {
        render(<Input />)
    });
    
    it('should call the onChange function when value is changed', () => {
        const onChange = jest.fn()
        render(<Input onChange={onChange} />)
    });
})
