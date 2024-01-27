import axios from 'axios';

const instance = axios.create({
  baseURL:
    'https://pixabay.com/api/?q=cat&page=1&key=41017518-95b21bb0f6248f508a9feed4e&image_type=photo&orientation=horizontal&per_page=9',
  params: {
    key: '41017518-95b21bb0f6248f508a9feed4e',
    image_type: 'photo',
    orientation: 'horizontal',
  },
});

export const getAllImages = () => {
  return instance.get(
    'https://pixabay.com/api/?q=cat&page=1&key=41017518-95b21bb0f6248f508a9feed4e&image_type=photo&orientation=horizontal&per_page=9'
  );
};

export const searchImages = (q, page = 1, per_page = 12) => {
  return instance.get('/', {
    params: {
      q,
      page,
      per_page,
    },
  });
};
