import {Project} from "../../app/features/projects/interfaces/project";

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
    description: 'Projeto implementado com base em design proposto como desafio pela plataforma Front-End Mentor. Consiste em uma aplicação que consome a API Rest Countries possibilitando listagem de países, filtragem e visualização detalhada de um país. ',
    thumbnail: 'rest.png'
  },
  {
    id: 3,
    title: 'Room Homepage',
    stack: 'Javascript | Sass',
    deployLink: 'https://roomhomepageapp.netlify.app/',
    repoLink: 'https://github.com/Samuel0102/room-homepage-front-end-mentor',
    description: 'Desafio de Front End, implementado com o uso de JS e SASS tem como função ser um landing page de uma ficticia loja de móveis. Desenvolvido com o propósito de agregar nas habilidades em Javascript e para conhecimento mais avançado de pré-processors, além de primeira implementação de um Slider. ',
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
    description: 'Projeto Front-End implementado com base em desafio proposto pela plataforma Front-End Mentor, consistindo em uma landing page de uma fictícia empresa de banco. Primeiro uso de Tailwind. ',
    thumbnail: 'easy.png'
  }
]
