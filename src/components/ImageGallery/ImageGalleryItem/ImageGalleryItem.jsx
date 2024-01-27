import css from './image-gallery-item.module.css';

const ImageGalleryItem = ({ showModal, items }) => {
  const elements = items.map(({ id, webformatURL, largeImageURL }) => (
    <li
      key={id}
      onClick={() => showModal(largeImageURL)}
      className={css.galleryItem}
    >
      <img className={css.galleryItemImage} src={webformatURL} alt="" />
    </li>
  ));

  return <ul className={css.gallery}>{elements}</ul>;
};

export default ImageGalleryItem;
