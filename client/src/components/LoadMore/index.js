import { Button, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default function LoadMore({ visible, onClickButton }) {
  if (!visible) {
    return null;
  }

  return (
    <Segment className="load-more">
      <Button
        content="Load More"
        fluid
        onClick={onClickButton}
      />
    </Segment>
  );
}
