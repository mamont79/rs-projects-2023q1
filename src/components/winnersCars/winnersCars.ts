import { baseUrl, path } from '../../constants/serverUrl';

const getWinners = async () => {
  const responce = await fetch(`${baseUrl}${path.winners}`);
  const data = await responce.json();
  console.log(data.length);
};

export { getWinners };
