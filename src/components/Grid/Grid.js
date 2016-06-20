import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './styles.scss';

export default class Grid extends Component {

  wrapChildren = (childCollection) => {
    return childCollection.map((item, index) => {
      return (
        <div
          key={index}
          className={styles.cell}
        >
          {item}
        </div>
      );
    });
  }

  render(){
    const transitionNames = {
      enter: 'enter',
      leave: 'leave',
      appear: 'appear'
    };
    return (
      <ReactCSSTransitionGroup
        className={styles.grid}
        transitionAppear={true}
        transitionName={transitionNames}
        transitionAppearTimeout={300}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {this.wrapChildren(this.props.children)}
      </ReactCSSTransitionGroup>
    );
  }
}
