import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export function Section({ title, children }) {
  return (
    <section className="section">
      <h2 className="title">{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = { title: PropTypes.string.isRequired };

// Чи треба перевіряти дітей
