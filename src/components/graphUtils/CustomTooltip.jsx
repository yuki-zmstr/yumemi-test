import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../stylesheets/CustomTooltip.module.css';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        <h3>{`${label}年`}</h3>
        {payload.map((item) => (
          <p key={item.value} style={{ color: item.stroke }}>{`${item.name} : ${item.value} 人`}</p>
        ))}
      </div>
    );
  }
  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.instanceOf(Array),
  label: PropTypes.number,
};

CustomTooltip.defaultProps = {
  active: false,
  payload: [],
  label: 0,
};

export default CustomTooltip;
