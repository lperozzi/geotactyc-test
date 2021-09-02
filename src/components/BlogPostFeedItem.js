import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Link, withPrefix} from '../utils';
import BlogPostCategories from './BlogPostCategories';

export default class BlogPostFeedItem extends React.Component {
    render() {
        let blog_feed_section = _.get(this.props, 'blog_feed_section', null);
        let post = _.get(this.props, 'post_page', null);
        return (
            <article className="cell">
              <div className="card">
                {_.get(post, 'frontmatter.image', null) && (
                <Link className="card__media card__media--top" to={withPrefix(_.get(post, 'url', null))}>
                  <img src={withPrefix(_.get(post, 'frontmatter.image', null))} alt={_.get(post, 'frontmatter.image_alt', null)} />
                </Link>
                )}
                <div className="card__body">
                  <header className="card__header">
                    {_.get(post, 'frontmatter.categories', null) && (
                      <BlogPostCategories {...this.props} categories={_.get(post, 'frontmatter.categories', null)} container_class={'card__meta'} />
                    )}
                    {_.get(blog_feed_section, 'title', null) ? (
                      <h3 className="card__title text-geotactyc-light"><Link to={withPrefix(_.get(post, 'url', null))}>{_.get(post, 'frontmatter.title', null)}</Link></h3>
                    ) : 
                      <h2 className="text-2xl card__title text-gray-light font-display"><Link to={withPrefix(_.get(post, 'url', null))}>{_.get(post, 'frontmatter.title', null)}</Link></h2>
                    }
                  </header>
                  {_.get(post, 'frontmatter.excerpt', null) && (
                    <div className="card__copy">
                      <p className="text-gray-50 font-display">{_.get(post, 'frontmatter.excerpt', null)}</p>
                    </div>
                  )}
                  <footer className="card__footer">
                    <span className="text-gray-400 font-display">On <time dateTime={moment(_.get(post, 'frontmatter.date', null)).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(post, 'frontmatter.date', null)).strftime('%B %d, %Y')}</time></span>
                    {_.get(post, 'frontmatter.author', null) && ((() => {
                        let author = _.get(post, 'frontmatter.author', null);
                        return (
                          author.link ? (
                            <span className="text-gray-400 font-display"> by <Link to={withPrefix(author.link)}>{author.first_name} {author.last_name}</Link></span>
                          ) : 
                            <span className="text-gray-400 font-display"> by {author.first_name} {author.last_name}</span>
                        );
                    })())}
                  </footer>
                </div>
              </div>
            </article>
        );
    }
}
