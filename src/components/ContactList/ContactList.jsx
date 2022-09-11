import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ filterContacts, deleteContact }) => {
  return (
    <div className={styles.contactItem}>
      {filterContacts.map(({ id, number, name }) => {
        return (
          <li key={id}>
              {name}: {number}
            <button className={styles.button} onClick={() => deleteContact(id)}>
              Delete
              </button>
            
          </li>
        );
      })}
    </div>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;