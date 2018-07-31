import React, { Component } from 'react';

export default class CategoryHeader extends Component {
  render() {
    const groupLabels = ['Math', 'Finance', 'History'];

    const categoryColumns = groupLabels.map(group => (
      <div key={group} className="columns small-4">
        <button>{group}</button>
      </div>
    ));
    return <div className="row">{categoryColumns}</div>;
  }
}
