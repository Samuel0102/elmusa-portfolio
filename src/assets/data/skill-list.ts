import {SkillList} from "@features/skills/interfaces/skill-list";

export const skillList: SkillList[] = [
  {
    group: 'Front-End',
    list: [
      { id: 1, name: 'Angular', icon: 'devicon-angular-plain' },
      { id: 2, name: 'Bootstrap', icon: 'devicon-bootstrap-plain' },
      { id: 2, name: 'Javascript', icon: 'devicon-javascript-plain' },
      { id: 3, name: 'Typescript', icon: 'devicon-typescript-plain' },
      { id: 4, name: 'TailwindCSS', icon: 'devicon-tailwindcss-original' },
      { id: 5, name: 'Sass', icon: 'devicon-sass-original' },
    ]
  },
  {
    group: 'Back-End',
    list: [
      { id: 1, name: 'Spring', icon: 'devicon-spring-original' },
      { id: 2, name: 'Java', icon: 'devicon-java-plain' },
      { id: 3, name: 'Python', icon: 'devicon-python-plain' },
      { id: 3, name: 'Flask', icon: 'devicon-flask-original' },
      { id: 4, name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
      { id: 5, name: 'Oracle', icon: 'devicon-oracle-original' },
    ]
  }
];
