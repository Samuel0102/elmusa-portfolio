# Elmusa Portfolio

Portfolio pessoal de Samuel Pacheco Ferreira, desenvolvido em Angular para apresentar perfil profissional, projetos, experiencias, formacao, habilidades e curriculos em portugues e ingles.

:link: Deploy: em breve

## Sobre o projeto

O Elmusa Portfolio e uma aplicacao web responsiva com foco em apresentacao profissional. A interface organiza as principais informacoes do desenvolvedor em secoes navegaveis, com suporte a internacionalizacao, download de curriculo conforme idioma selecionado e exibicao de projetos com links para deploy e repositorio quando disponiveis.

### Visual final

#### Desktop

Imagem em breve.

#### Mobile

Imagem em breve.

### Especificacoes

*Author*: Samuel Pacheco Ferreira  
*Description*: Portfolio pessoal responsivo para apresentacao profissional e projetos.  
*Stage*: Em desenvolvimento  
*Will be updated?*: Sim  

### Tecnologias

*Technologies*: Angular 18, TypeScript, SCSS, Tailwind CSS, PrimeNG, Transloco, FontAwesome, tsParticles, RxJS  
*IDE*: WebStorm  
*Main Structure*: Angular standalone components, assets de traducao e organizacao por core, shared e features  

### Funcionalidades

| Funcionalidade | Status |
| ----------- | ----------- |
| Secao inicial com nome e cargos em destaque | :heavy_check_mark: |
| Navegacao por secoes da pagina | :heavy_check_mark: |
| Menu mobile | :heavy_check_mark: |
| Seletor de idioma portugues/ingles | :heavy_check_mark: |
| Persistencia do idioma selecionado | :heavy_check_mark: |
| Secao sobre com download de curriculo por idioma | :heavy_check_mark: |
| Listagem de projetos com imagens, tecnologias e links | :heavy_check_mark: |
| Linha do tempo de experiencia profissional | :heavy_check_mark: |
| Secao de formacao academica | :heavy_check_mark: |
| Secao de habilidades | :heavy_check_mark: |
| Testes unitarios com Karma/Jasmine | :clock130: |

:clock130: - Em desenvolvimento  
:heavy_check_mark: - Finalizado

### Requisitos para desenvolvimento

* Node.js compativel com Angular 18
* npm
* Angular CLI

### Execucao do sistema

1. Instale as dependencias:

   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

3. Acesse a aplicacao no navegador:

   ```text
   http://localhost:4200
   ```

### Scripts disponiveis

```bash
npm start
```

Executa a aplicacao em modo de desenvolvimento.

```bash
npm run build
```

Gera a build de producao em `dist/elmusa-portfolio`.

```bash
npm test
```

Executa os testes unitarios com Karma e Jasmine.

```bash
npm run watch
```

Executa a build em modo watch usando a configuracao de desenvolvimento.

### Estrutura principal

```text
src/
  app/
    core/
      components/
      constants/
      interfaces/
      services/
    features/
      about/
      education/
      experience/
      home/
      projects/
      skills/
    shared/
      components/
      services/
  assets/
    data/
    files/
    i18n/
    images/
```

### Documentacao ou outros arquivos

* Curriculo em portugues: `src/assets/files/curriculum-pt.pdf`
* Curriculo em ingles: `src/assets/files/curriculum-en.pdf`
* Traducoes: `src/assets/i18n/pt.json` e `src/assets/i18n/en.json`
* Lista de habilidades: `src/assets/data/skill-list.ts`

### Origem do projeto

Projeto desenvolvido como portfolio pessoal para centralizar apresentacao profissional, experiencias, formacao e projetos publicados.

### Principais desafios do projeto

* Criar uma experiencia responsiva para desktop, tablet e mobile.
* Manter os textos e dados sincronizados entre portugues e ingles.
* Organizar componentes reutilizaveis sem perder simplicidade na estrutura do projeto.
* Integrar assets, curriculos, imagens de projetos e dados traduzidos de forma consistente.
