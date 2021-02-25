import React from "react";

import ReactBnbGallery from "react-bnb-gallery";

import "react-bnb-gallery/dist/style.css";

import Photo1 from "../media/Photo1.jpg";
import Photo2 from "../media/Photo2.jpg";
import Photo3 from "../media/Photo3.jpg";
import Photo4 from "../media/Photo4.jpg";
import Photo5 from "../media/Photo5.webp";
import Photo6 from "../media/Photo6.jpg";
import Photo7 from "../media/Photo7.webp";
import Photo8 from "../media/Photo8.jpg";
import Photo9 from "../media/Photo9.jpg";
import Photo10 from "../media/Photo10.png";

const photos = [
  {
    photo: Photo1,
    caption: "Caça de Crocodilos às margens do Nilo. [ca. 1880].",
    subcaption:
      "Foto tirada pelos Adelphoi Zangaki, demonstra o quotidiano de caçadores dos crocodilos no Nilo, que provavelmente sobrevivem do ato. O sucesso da foto demonstra o Orientalismo europeu e fará contraste com a próxima imagem.",
  },
  {
    photo: Photo2,
    caption:
      "Grão-Duque Alexandre da Rússia e companhia após a caça de um guepardo em março de 1891",
    subcaption:
      "Foto tirada por Deen Dayal na Índia, retrata o hábito de caça esportiva dos abastados europeus, cuja riqueza derivava muitas vezes da exploração de humanos como os da 1º Fotografia.",
  },
  {
    photo: Photo3,
    caption: 'Outro "Homem Doente". [1898]',
    subcaption:
      "Charge feita pelo Sir John Tenniel, nos comunica a visão eugénica que os europeus tinham das outras civilizações, que naquele momento estavam em decadência. A forma de retratar os dois asiáticos é muito estereotipada, beirando uma ofensa racista.",
  },
  {
    photo: Photo4,
    caption:
      "A primeira reunião do Conselho Nacional de Mulheres da Nova Zelândia in Christchurch, Abril de 1896.",
    subcaption:
      "Três anos anteriormente ao início desse encontro o sufrágio feminino fora garantido no país, o que deu precedente ao acontecimento do mesmo na maioria das repúblicas, dando o primeiro passo para a igualdade de gênero.",
  },
  {
    photo: Photo5,
    caption:
      'Anúncio de espartilhos "elétricos" a venda em Londres. [ca. 1890]',
    subcaption:
      'O anúncio é um bom exemplo do consumismo que vinha nascendo devido à prosperidade europeia pós Congresso de Viena, uma prosperidade à custa das outras "raças". Além da bizarrice implícita provinda do desenvolvimento desenfreado da tecnologia.',
  },
  {
    photo: Photo6,
    caption: "O Congresso de Viena [1819]",
    subcaption:
      "O quadro é uma representação do Congresso de Viena em 1815, que foi estabelecido após a derrota de Napoleão, o congresso que manteria a paz intra-europeia até a 1º Guerra. Isso possibilitou a expansão dos europeus em outras partes do mundo(Ásia e Africa).",
  },
  {
    photo: Photo7,
    caption: "Aumento da população de sem-tetos [final dos 1800s]",
    subcaption:
      "A foto enquadra a falta de moradia em uma Londres pós-industrial. Com a massiva urbanização londrina a população de sem-tetos também aumentou, muitos deles vinham do campo para não conseguirem sustentar um teto.",
  },
  {
    photo: Photo8,
    caption: "Senhores Penn and Son's trabalham.",
    subcaption:
      'A antiga foto nos mostra como que era a "nova" maneira de trabalhar, com as máquinas e de forma repetitiva, ela domina a indústria até hoje, mas com máquinas no lugar dos humanos.',
  },
  {
    photo: Photo9,
    caption: "Maquinário na fundição de Penn and Son's.",
    subcaption:
      "A maquina nos mostrada foi uma das substitutas de boa parte da força animal e humana no processos de manufatura, criando a indústria.",
  },
  {
    photo: Photo10,
    caption: "Empregados de uma central telefônica em Nova Iorque [1896]",
    subcaption:
      "A dinâmica de trabalho retratada na foto começou a ser aplicada no início da 2º Rev. Industrial e ela foi usada por muito tempo, anteriormente a labuta no campo era o comum. Ela também mostra a ascensão do telefone.",
  },
];

const Gallery = () => {
  return (
    <>
      <ReactBnbGallery show={true} photos={photos} />
    </>
  );
};
export default Gallery;
