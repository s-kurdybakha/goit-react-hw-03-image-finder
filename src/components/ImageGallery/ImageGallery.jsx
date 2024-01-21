import { Component } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';

import css from './image-gallery.module.css';

class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    // const API_KEY = '41017518-95b21bb0f6248f508a9feed4e';
    // const BASE_URL =
    //   'https://pixabay.com/api/?q=cat&page=1&key=41017518-95b21bb0f6248f508a9feed4e&image_type=photo&orientation=horizontal&per_page=12';
    this.setState({
      loading: true,
    });
    axios
      .get(
        'https://pixabay.com/api/?q=cat&page=1&key=41017518-95b21bb0f6248f508a9feed4e&image_type=photo&orientation=horizontal&per_page=12'
      )
      .then(({ data }) => {
        this.setState({
          loading: false,
          images: data.hits?.length ? data.hits : [],
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error.message,
        });
      });
  }

  render() {
    const { images, loading, error } = this.state;
    const elements = images.map(({ id, webformatURL, largeImageURL }) => (
      <li key={id} className={css.galleryItem}>
        <img src={webformatURL} alt="" />
      </li>
    ));
    return (
      <>
        {error && <p>{error}</p>}
        {loading && <Loader />}
        {Boolean(elements.length) && (
          <ul className={css.gallery}>{elements}</ul>
        )}
      </>
    );
  }
}

export default ImageGallery;
