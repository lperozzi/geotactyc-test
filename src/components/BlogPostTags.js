import React from 'react';
import _ from 'lodash';

export default class BlogPostTags extends React.Component {
    render() {
        let tags = _.get(this.props, 'tags', null);
        return (
            _.map(tags, (tag, tag_idx) => (
              <span className="text-yellow-200" key={tag_idx}>{tag}</span>
            ))
        );
    }
}
