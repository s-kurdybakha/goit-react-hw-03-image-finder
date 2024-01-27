import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './modal.module.css';

const modalRoot = document.getElementById('modal-root');
console.log(modalRoot);

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    console.log(code);
    if (target === currentTarget || code === 'Escape') this.props.close();
  };

  render() {
    const { closeModal } = this;
    const { children, close } = this.props;

    return createPortal(
      <div onClick={closeModal} className={css.overlay}>
        <div className={css.modal}>
          <span onClick={close} className={css.closeBtn}>
            х
          </span>{' '}
          {children}
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
