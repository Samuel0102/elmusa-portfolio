import {Project} from "@features/projects/interfaces/project";

export const projectList: Project[] = [
  {
    id: 1,
    title: 'Portal de Talentos',
    stack: 'Angular | Spring | Sass',
    deployLink: 'https://www.portaldetalentos.senior.com.br/',
    description: 'Projeto que atuei na Senior Sistemas. Grandes desafios na construção, principalmente pela arquitetura do back-end ser Hexagonal e ser feito em microsserviços.',
    thumbnail: 'talent-portal.png'
  },
  {
    id: 2,
    title: 'Rest Countries',
    stack: 'Javascript | Tailwind',
    deployLink: 'https://countriesrestapp.netlify.app/',
    repoLink: 'https://github.com/Samuel0102/rest-countries-tailwind',
    description: 'Projeto criado para consumo da API Rest Countries, possibilitando filtragem, detalhes, pesquisa e troca de temas',
    thumbnail: 'rest.png'
  },
  {
    id: 3,
    title: 'Room Homepage',
    stack: 'Javascript | Sass',
    deployLink: 'https://roomhomepageapp.netlify.app/',
    repoLink: 'https://github.com/Samuel0102/room-homepage-front-end-mentor',
    description: 'Projeto do FrontEnd Mentor, com principal objetivo e desafio na utilização de Sass como pré-processador para estruturar responsividade ',
    thumbnail: 'room.png'
  },
  {
    id: 4,
    title: 'Gabarita Lab',
    stack: 'Javascript | Boostrap',
    description: 'Atuação no projeto para uma empresa de auxílio para vestibular. Ajustes essenciais no layout e na estrutura, adicionando novas áreas',
    thumbnail: 'gabaritalab.png'
  },
  {
    id: 5,
    title: 'Easy Bank',
    stack: 'Javascript | Tailwind',
    deployLink: 'https://landing-page-easy-bank.netlify.app/',
    repoLink: 'https://github.com/Samuel0102/easy-bank-front-end-mentor',
    description: 'Projeto proposto pela FrontEnd Mentor. Construção de layout responsivo inteiramente em TailwindCSS ',
    thumbnail: 'easy.png'
  }
]
