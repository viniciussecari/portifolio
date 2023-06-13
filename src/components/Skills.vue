<template>
  <section class="flex items-center flex-col overflow-hidden">
    <h1 class="mb-4 text-5xl font-light">
      {{ $t('sections.skills.title') }}
    </h1>

    <div class="carrousel">
      <skill v-for="skill in skills" :key="skill.title" :item="skill" />
    </div>
  </section>
</template>

<script setup>
import Skill from './Skill.vue';

const skills = [
  {
    title: 'Vue JS',
    description: `Vue.js é um framework JavaScript de código-aberto, 
        focado no desenvolvimento de interfaces de usuário e aplicativos de página única`,
    icon: '../assets/icons/vue.svg',
  },
  {
    title: 'HTML',
    description:
      'HTML é uma linguagem de marcação utilizada na construção de páginas na Web.',
    icon: '../assets/icons/html-5.svg',
  },
  {
    title: 'CSS',
    description: `Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, 
        aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>.`,
    icon: '../assets/icons/css-3.svg',
  },
  {
    title: 'JS',
    description: `JavaScript é uma linguagem de programação interpretada estruturada, 
        de script em alto nível com tipagem dinâmica fraca e multiparadigma.`,
    icon: '../assets/icons/js.svg',
  },
  {
    title: 'Jest',
    description: `Jest é uma estrutura de teste de JavaScript 
    construída sobre o Jasmine e mantida pela Meta.`,
    icon: '../assets/icons/jest.svg',
  },
  {
    title: 'Cypress',
    description: `Cypress é uma ferramenta de teste de front-end 
    para aplicativos da web.`,
    icon: '../assets/icons/cypress.svg',
  },
  {
    title: 'Git',
    description: `Git é um sistema de controle de versões distribuído, 
    usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o
    histórico de edições de qualquer tipo de arquivo.`,
    icon: '../assets/icons/git.svg',
  },
  {
    title: 'Clean Code',
    description: `Clean Code ou código limpo se refere a um conjunto de boas práticas na 
    escrita de software que você pode aplicar para obter uma maior legibilidade 
    e manutenabilidade do seu código.`,
    icon: '../assets/icons/code.svg',
  },
];
</script>

<style scoped>
.carrousel {
  display: flex;
  overflow-x: auto;
  width: 100%;
}

.carrousel::-webkit-scrollbar {
  height: 0.5rem;
}

.carrousel::-webkit-scrollbar-track {
  background: transparent;
  padding: 2px;
}

.carrousel::-webkit-scrollbar-thumb {
  background-color: rgb(14 116 144);

  border-radius: 4px;
}
</style>
