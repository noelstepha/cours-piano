<script setup>
import Banner from "@/components/Banner.vue";
import Title from "@/components/Title.vue";
import CatchPhrase from "@/components/CatchPhrase.vue";
import AnimatedGradient from "@/components/AnimatedGradient.vue";
import PagePreview from "@/components/PagePreview.vue";
</script>

<template>
  <div class="bg-white">
    <Banner />
    <section class="flex justify-center">
      <AnimatedGradient class="w-4/5 md:w-1/2 xl:w-1/3 min-h-80 my-10 shadow-md">
        <div class="flex flex-col items-center">
          <div class="w-full p-4 text-center">
              <h1 class="text-3xl my-2 font-baskerville italic">C'est bientôt la rentrée !</h1><br/>
              <p class="text-lg">
                Vous pouvez nous contacter à partir du <br /><span class="text-xl font-baskerville italic">mercredi 31 Août 2022</span><br /> pour tout renseignement.<br /><br />
                Les cours reprendront à partir du <br /><span class="text-xl font-baskerville italic">lundi 5 Septembre 2022</span>.<br/>
                Inscription tout au long de l'année.
              </p>

          </div>
          <img class="w-1/3 my-5" src="/img/clavier.png" alt="cours piano" />
        </div>
      </AnimatedGradient>
    </section>
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
        <span class="text-4xl">Un cours d'essai vous est offert</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="inline h-12 w-12 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"  aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      </div>
    </CatchPhrase>
    <section class="mb-12" id="lesson">
      <PagePreview title="Cours enfants" bg-class="children-img" to="/children" reverse first>
        Ce cours pour enfants s’adresse aux enfants de 8 à 14 ans et se passe en cours collectif de 2 à 4 élèves.
        Notre professeur de musique accompagnera votre enfant dans son apprentissage du piano et son éveil musical grâce à son esprit pédagogue.
        Peu importe le niveau de votre enfant, débutant ou non, qu'il soit intéressé par le piano classique ou le clavier électrique,
        le professeur pianiste revient sur les bases et fondamentaux du piano.<br />
      </PagePreview>
      <PagePreview title="Cours adultes et adolescents" bg-class="adult-img" to="/adult">
        Ce cours de piano s’adresse aux adultes et aux adolescents à partir de 15 ans.
        La méthode d'enseignement est conçue pour les débutants et les élèves expérimentés.<br />
        Quel que soit votre niveau, débutant ou expérimenté, il y aura toujours un cours de piano qui vous correspondra.
      </PagePreview>
      <PagePreview title="Cours à distance" bg-class="online-img" to="/online" reverse last>
        En complément des cours traditionnels, ils ont lieu à distance via WhatsApp, FaceTime, Zoom,… avec votre smartphone ou tablette,… quelque soit votre niveau ou votre âge.
        Pas besoin d’équipement particulier.<br />
        Ces cours sont accessibles de façon régulière ou ponctuelle, en cas d’incapacité de se déplacer pour un cours en présentiel.
        Des fichiers audios vous sont transmis pour compléter le travail personnel.
      </PagePreview>
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
        <Title text="Covid-19"></Title>

        <div>
          Nous avons installé toute une panoplie de protections sous forme de parois de plexiglass et nettoyant désinfectant, afin que vous puissiez suivre vos cours avec toutes les protections sanitaires qui s'imposent. <br /><br />
          Pendant les périodes de confinement ou couvre-feu, des cours de piano en ligne en mode visioconférence avec un professeur en direct, sont toujours disponibles.
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

.school-img {
  background-image: url('/img/music-design.jpg');
}

.covid-img {
  background-image: url('/img/covid.png');
}

.bg-notes {
  background-image: url("/img/gradient-2.jpeg");
}
</style>
