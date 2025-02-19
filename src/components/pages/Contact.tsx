import './pages.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const links = [
    {
      icon: faWhatsapp,
      value: '+62821-1838-1186',
    },
    {
      icon: faEnvelope,
      value: 'justintnwj2@gmail.com',
    }
  ];

  return (
    <div className='contact'>
      <div className='contactTitle'>Reach Out to Me :</div>
      {links.map((link, index) => (
        <div className='contactParent'>
          <div className='iconContact' // Apply active class if this link is the active one
            key={index}>
            <FontAwesomeIcon icon={link.icon} />
          </div>
          <div className='contactValue'>
            {link.value}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Contact;
