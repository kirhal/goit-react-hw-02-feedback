import PropTypes from 'prop-types';

export function Notification({ message }) {
  return <p className={css[`statistics-item`]}>{message}</p>;
}

Notification.propTypes = { message: PropTypes.string.isRequired };
