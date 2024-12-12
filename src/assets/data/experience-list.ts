import {Experience} from "@features/experience/interfaces/experience";

export const experienceList: Experience[] = [
  {
    id: 1,
      date: '02.2024',
    jobPosition: 'Software Developer',
    company: 'Senior Sistemas',
    description: `
      <p>
      Desenvolvimento multidisciplinar,  com atuação em três produtos da frente RH: Portal de
      Talentos, Recrutamento e Seleção e Onboarding.  Como maior tempo de atuação o Portal de
      Talentos, um job board em Spring e Angular com foco em arquitetura limpa, acessibilidade e mobile-first.
      </p>
      `
  },
  {
    id: 2,
    date: '02.2022 - 09.2023',
    jobPosition: 'Freelance Developer',
    company: 'Plataformas variadas',
    description: `
      <p>
      Atuação multiplataforma, entregando projetos para Fiverr, 99Freelas, Upwork e Workana.
      Principais entregas relacionadas a automação, como um gerador de planilhas com base
      em cotações de criptomoedas e um gerador de vídeos para o instagram. Entregas com diferentes tecnologias, com foco em Python.
      </p>
      <div class="underline flex flex-col">
        <a href="https://www.fiverr.com/samuelpachecofe">Perfil Fiverr</a>
        <a href="https://www.upwork.com/freelancers/~01d8b4280b6fa8913b">Perfil Upwork</a>
        <a href="https://www.99freelas.com.br/user/samuel-pacheco-ferreira">Perfil 99Freelas</a>
      </div>
      `
  },
  {
    id: 3,
      date: '05.2022 - 09.2023',
    jobPosition: 'Software Engineering Intern',
    company: 'Philips',
    description: `
      <p>
       Atuação no sistema médico Tasy, entregando customizações e correções para o setor Financeiro e
       Contábil (F&A) em todas as plataformas ofertadas: Delphi, Java Swing  e HTML5(Angular/Spring)
      </p>
      `
  }
]
