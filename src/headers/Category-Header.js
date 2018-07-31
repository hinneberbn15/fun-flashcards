import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class CategoryHeader extends Component {
  render() {
    const groupLabels = ['Math', 'Finance', 'History'];

    const categoryColumns = groupLabels.map(group => (
      <div key={group} className="columns small-4">
        <Button variant="outlined">{group}</Button>
      </div>
    ));
    return <div className="row">{categoryColumns}</div>;
  }
}
