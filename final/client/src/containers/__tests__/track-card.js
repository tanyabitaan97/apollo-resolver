import React from 'react';
import {
  renderApolloWithRouter,
  cleanup,
  waitForElement,
} from '../../utils/test-utils';
import TrackCard from '../track-card';

const mockTrackCardData = {
  id: 'c_0',
  title: 'Cat-stronomy, an introduction',
  thumbnail:
    'https://res.cloudinary.com/apollographql/image/upload/v1730818804/odyssey/lift-off-api/nebula_cat_djkt9r_nzifdj.jpg',
  length: 2377,
  author: {
    name: 'Henri, le Chat Noir',
    photo:
      'https://images.unsplash.com/photo-1442291928580-fb5d0856a8f1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzA0OH0',
  },
};

describe('Track Card', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders track Card', async () => {
    const mocks = [];
    const { getByText } = await renderApolloWithRouter(
      <TrackCard track={mockTrackCardData} />,
      {
        mocks,
        resolvers: {},
        addTypename: false,
      }
    );
    await waitForElement(() => getByText(/cat-stronomy/i));
  });
});
