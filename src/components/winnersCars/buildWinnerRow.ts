import { carSvgCode } from '../../constants/svg-code';

const winnerRowBuilder = (id: string, color: string, name: string, wins: string, time: string) => {
  const svgImg = `<svg fill="${color}"
                  xmlns="http://www.w3.org/2000/svg"
                  width="60" height="25" viewBox="0 0 1280 640"
                  class="winner-image" id="${id}-image"></svg>`;
  const winnerRowHtml = `
    <tr>
      <td class="winner-position" id="${id}-position">${id}</td>
      <td class="winner-car" id="${id}-winner">
        
      </td>
      <td class="winner-name" id="${id}-model">${name}</td>
      <td class="winner-win-amount" id="${id}-wins">${wins}</td>
      <td class="winner-best-time" id="${id}-time">${time}</td>
    </tr>
  `;

  (document.querySelector('.winners-results') as HTMLElement).innerHTML += winnerRowHtml;
  (document.getElementById(`${id}-winner`) as HTMLElement).innerHTML = svgImg;
  (document.getElementById(`${id}-image`) as HTMLElement).innerHTML = carSvgCode;
};

export { winnerRowBuilder };
