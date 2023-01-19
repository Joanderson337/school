import { render } from '@testing-library/react';
import { InfoCardHobbies } from '.';

describe('InfoCardHobbies', () => {
  it('should show a hobbie if there is one', () => {
    const { getByText } = render(<InfoCardHobbies hobbies='Play soccer' />);

    getByText('Play soccer');
  });
});
