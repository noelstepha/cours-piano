<script setup>
import Banner from "@/components/Banner.vue";
import Title from "@/components/Title.vue";
import CatchPhrase from "@/components/CatchPhrase.vue";
import Button from "@/components/Button.vue";
</script>

<template>
  <div class="bg-white">
    <Banner />
    <section
        id="school"
      class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8 flex flex-col-reverse md:flex-row"
    >
      <div class="w-full h-80 md:w-1/3 bg-center bg-contain bg-no-repeat school-img"></div>
      <div class="w-full md:w-2/3">
        <Title text="L'école"></Title>

        <div>
          Notre école de piano, l'Espace Musical des Blanchers, est installée à Toulouse, dans le quartier de Saint-Cyprien, et propose des cours de piano de tous niveaux à partir de 8 ans.<br />

          Nous vous proposons des cours de piano, piano numérique, clavinova, ou clavier pour tous les âges du débutant au plus confirmé.<br />

          Notre méthode d'enseignement vous permet d'apprendre la musique avec une pédagogie adaptée à votre âge, ainsi qu'à vos capacités.<br />

          Notre professeur met plus de 15 ans d'expérience à votre service, afin de vous apprendre à jouer du piano, tout en s'adaptant à votre niveau et à vos goûts musicaux.<br />

          La salle de cours, insonorisée et climatisée, est équipée de pianos Yamaha régulièrement changés pour que votre progression se passe toujours dans les meilleures conditions.<br />
        </div>
      </div>
    </section>
    <CatchPhrase bg-class="bg-gradient">
      <div class="flex items-center justify-center text-center h-40 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="inline h-12 w-12 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"  aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
        Le cours d'essai vous est offert
        <svg xmlns="http://www.w3.org/2000/svg" class="inline h-12 w-12 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"  aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      </div>
    </CatchPhrase>

    <section class="mb-12" id="lesson">
      <div class="m-auto max-w-screen-xl flex flex-wrap">
        <div class="w-full md:w-1/2 h-80 bg-center bg-cover children-img"></div>
        <div class="w-full md:w-1/2 p-10 md:pt-0 flex flex-col">
          <Title text="Cours enfants"></Title>
          <div class="flex-grow">
            Ce cours pour enfants s’adresse aux enfants de 8 à 14 ans et se passe en cours collectif de 2 à 4 élèves.<br />
            Notre professeur de musique accompagnera votre enfant dans son apprentissage du piano et son éveil musical grâce à son esprit pédagogue. <br />
            Peu importe le niveau de votre enfant, débutant ou non, qu'il soit intéressé par le piano classique ou le clavier électrique,
            le professeur pianiste revient sur les bases et fondamentaux du piano.<br />
          </div>
          <Button class="w-max" text="Lire plus"></Button>
        </div>
      </div>
      <div class="m-auto max-w-screen-xl flex flex-col-reverse md:flex-row">
        <div class="w-full md:w-1/2 p-10 flex flex-col">
          <Title text="Cours adultes et adolescents"></Title>
          <div class="flex-grow">
            Ce cours de piano s’adresse aux adultes et aux adolescents à partir de 15 ans.<br />
            Grace à une pédagogie moderne, durant les cours, vous allez apprendre à jouer du piano, mais aussi apprendre comment pratiquer pendant la semaine, au travers d'outils spécifiques.
            S'entrainer ne nécessite pas que de l'obstination, il faut aussi la bonne méthode.<br />
          </div>
          <Button class="w-max" text="Lire plus"></Button>
        </div>
        <div class="w-full md:w-1/2 h-80 bg-center bg-cover adult-img"></div>
      </div>
    </section>
    <CatchPhrase bg-class="bg-sheet-music">
      <div class="flex flex-wrap items-center justify-center w-full mt-5 h-80">
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center text-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          <div class="my-5 text-3xl">Un apprentissage ludique</div>
        </div>
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center text-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
          </svg>
          <div class="my-5 text-3xl">15 ans d'experience</div>
        </div>
      </div>
    </CatchPhrase>
    <section
        class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8 flex flex-wrap"
    >
      <div class="w-1/3 h-40 bg-center bg-contain bg-no-repeat covid-img"></div>
      <div class="w-2/3">
        <Title text="Covid"></Title>

        <div>
          Nous avons installé toute une panoplie de protections sous forme de parois de plexiglass et nettoyant désinfectant, afin que vous puissiez suivre vos cours avec toutes les protections sanitaires qui s'imposent. <br /><br />
          Pendant les périodes de confinement ou couvre-feu, des cours de piano en ligne en mode visioconférence avec un professeur en direct, sont toujours disponibles.
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.children-img {
  background-image: url('/img/cours-enfant.jpg');
}

.adult-img {
  background-image: url('/img/cours-adulte.jpg');
}

.school-img {
  background-image: url('/img/music-design.jpg');
}

.covid-img {
  background-image: url('/img/covid.png');
}

.custom-img {
  background-image: url("/img/sheet-music.jpg");
}
</style>
