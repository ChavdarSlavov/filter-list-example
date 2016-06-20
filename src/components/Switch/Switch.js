import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './styles.scss';

export default class Switch extends Component{

  static propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    label: PropTypes.string
  };

  static defaultProps = {
    checked: false
  };

  createLabelElement = (labelValue) => {
    if (labelValue){
      return (
        <span className={styles.text}>{labelValue}</span>
      );
    }
  }

  handleToggle = (event) => {
    if (this.props.onChange){
      this.props.onChange(!this.props.checked);
    }
  };

  render(){
    const { checked, label } = this.props;
    const switchClass = classnames(styles.switch, {
      [styles.checked]: checked
    });

    const labelElement = this.createLabelElement(label);
    return (
      <span className={styles.wrap}>
        <span
          className={switchClass}
          onClick={this.handleToggle}
        >
          <span className={styles.thumb} />
        </span>
        {labelElement}
      </span>
    );
  }

}
