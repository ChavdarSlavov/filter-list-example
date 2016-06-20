import React, { Component } from 'react';
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
    return (
      <div className={styles.grid}>
        {this.wrapChildren(this.props.children)}
      </div>
    );
  }
}
