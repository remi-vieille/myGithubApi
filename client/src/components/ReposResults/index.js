/* eslint-disable arrow-body-style */
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './style.scss';

import Repo from './Repo';

export default function ReposResults({ results }) {
  // on tranpose le tableau d'objet reçu en props
  // en tableau d'éléments JSX
  const jsxRepos = results.map((item) => {
    return (
      <Repo
        key={item.id}
        {...item}
      />
    );
  });

  return (
    <Card.Group
      itemsPerRow={3}
      stackable
      className="repos-results"
    >
      {jsxRepos}
    </Card.Group>
  );
}