<template>
  <section class="flex flex-col items-center">
    <section>
      <button @click="downloadCV"
        class="entrance_colors flex items-center justify-center p-2 my-2 border border-gray-100 hover:transform hover:scale-105">
        <img class="bg-cover w-4 h-4 mr-2" src="../assets/icons/download.svg" alt="" />
        {{ $t('profile.resume') }}
      </button>
    </section>

    <section class="mt-2 max-sm:flex-col md:flex justify-center">
      <div class="entrance_by_left lg:mr-2 mr-0">
        <h3>
          <a class="link__box" href="https://github.com/viniciussecari">
            <img class="bg-cover w-4 h-4 mr-2" src="../assets/icons/github-icon.svg" alt="" />
            GitHub
          </a>
        </h3>
      </div>

      <div class="entrance_by_right lg:ml-2 ml-0">
        <h3>
          <a class="link__box" :href="`https://www.linkedin.com/in/vinicius-secari/${lang}`">
            <img class="bg-cover w-4 h-4 mr-2" src="../assets/icons/linkedin-icon.svg" alt="" />
            LinkedIn
          </a>
        </h3>
      </div>
    </section>
  </section>
</template>

<script setup>
const lang = localStorage.getItem('language');

const downloadCV = () => {
  const pdfPath = `/src/assets/resumes/resume-${lang.value}.pdf`;
  const link = document.createElement('a');

  link.href = pdfPath;
  link.download = `resume-${lang.value}.pdf`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
</script>