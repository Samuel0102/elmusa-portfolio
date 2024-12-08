import {SkillList} from "../../app/features/skills/interfaces/skill-list";

export const skillList: SkillList[] = [
  {
    group: 'Front-End',
    list: [
      { id: 1, skill: 'Angular', picture: 'devicon-angular-plain' },
      { id: 2, skill: 'Bootstrap', picture: 'devicon-bootstrap-plain' },
      { id: 2, skill: 'Javascript', picture: 'devicon-javascript-plain' },
      { id: 3, skill: 'Typescript', picture: 'devicon-typescript-plain' },
      { id: 4, skill: 'TailwindCSS', picture: 'devicon-tailwindcss-original' },
      { id: 5, skill: 'Sass', picture: 'devicon-sass-original' },
    ]
  },
  {
    group: 'Back-End',
    list: [
      { id: 1, skill: 'Spring', picture: 'devicon-spring-original' },
      { id: 2, skill: 'Java', picture: 'devicon-java-plain' },
      { id: 3, skill: 'Python', picture: 'devicon-python-plain' },
      { id: 3, skill: 'Flask', picture: 'devicon-flask-original' },
      { id: 4, skill: 'PostgreSQL', picture: 'devicon-postgresql-plain' },
      { id: 5, skill: 'Oracle', picture: 'devicon-oracle-original' },
    ]
  }
];
