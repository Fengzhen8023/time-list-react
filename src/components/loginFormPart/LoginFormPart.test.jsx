import React from 'react';
import { render } from '@testing-library/react';

describe('LoginFormPart', () => {
    it('test', () => {
        const result = render(<span>3333</span>);
        expect(result.getByText('3333')).not.toBeUndefined();
        expect(4).toBeWithinRange(1,10);
    });
});