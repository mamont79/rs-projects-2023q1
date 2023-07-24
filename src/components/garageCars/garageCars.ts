import { baseUrl, path } from '../../constants/serverUrl';

const getCars = async () => {
  const responce = await fetch(`${baseUrl}${path.garage}`);
  const data = await responce.json();
  return data;
};

export { getCars };
