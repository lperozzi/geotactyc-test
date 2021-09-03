import React from 'react';
import _ from 'lodash';

import {classNames, toStyleObj, withPrefix} from '../utils';
import SectionActions from './SectionActions';

export default class HeroSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let background = _.get(section, 'background', null);
        let background_color = _.get(background, 'background_color', null) || 'white';
        let background_opacity_pct = _.get(background, 'background_image_opacity', null) || 100;
        let background_opacity = background_opacity_pct * 0.01;
        let background_size = _.get(background, 'background_image_size', null) || 'cover';
        let background_repeat = _.get(background, 'background_image_repeat', null) || 'no-repeat';
        return (
            <section className={classNames('section', 'hero', {'bg-image': _.get(section, 'has_background', null) && _.get(background, 'background_image', null), 'inverse bg-blue': _.get(section, 'has_background', null) && (background_color === 'blue'), 'bg-transparent': _.get(section, 'has_background', null) && (background_color === 'gray'), 'section--padding': _.get(section, 'has_background', null) || _.get(section, 'image', null)})}>
              {(_.get(section, 'has_background', null) && _.get(background, 'background_image', null)) && (
              <div className="bg-image__image" style={toStyleObj('background-image: url(\'' + withPrefix(_.get(background, 'background_image', null)) + '\'); opacity: ' + background_opacity + '; background-size: ' + background_size + '; background-repeat: ' + background_repeat)}/>
              )}
              <div className="container container--lg">
                <div className={classNames('flex', 'flex--middle', 'flex--center', 'flex--col-2', {'align-center': _.get(section, 'align', null) === 'center', 'align-right': _.get(section, 'align', null) === 'right'})}>
                  {_.get(section, 'image', null) && (
                  <div className={classNames('cell', 'section__media', {'section__media--right': _.get(section, 'image_position', null) === 'right'})}>
                    <img src={withPrefix(_.get(section, 'image', null))} alt={_.get(section, 'image_alt', null)} />
                  </div>
                  )}
                  <div className="cell section__body">
                    {_.get(section, 'title', null) && (
                    <h1 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">{_.get(section, 'title', null)}</h1>
                    )}
                    {_.get(section, 'subtitle', null) && (
                    <div className="section__copy">
                      <p className="max-w-xl mt-5 mx-auto text-xl text-gray-dark">{_.get(section, 'subtitle', null)}</p>
                    </div>
                    )}
                    {_.get(section, 'actions', null) && (
                    <div className="section__actions btn-group font-display text-base text-gray-50">
                      <SectionActions {...this.props} actions={_.get(section, 'actions', null)} />
                    </div>
                    
                    )}

                  </div>
                </div>
              </div>
            </section>
        );
    }
}
