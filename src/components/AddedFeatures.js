import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../state/actionCreators';

import AddedFeature from './AddedFeature';

export const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default connect(
  state => state,
  actionCreators,
)(AddedFeatures);
