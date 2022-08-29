<template>
  <section
      class="flex items-center pt-20 mb-12 bg-cover bg-center w-full text-5xl italic text-white font-baskerville bg-music">
    <h1 class="h-80 flex justify-center items-center text-center w-full goup">Cours pour enfants</h1>
  </section>
  <section>

    <div class="container mx-auto mb-10">

        <div class="flex flex-wrap justify-stretch mx-5 md:mx-10 lg:mx-20">
          <FreeLesson class="mb-10" center color-rotation="140"/>
          <p class="p-10">
            Ce cours pour enfants s’adresse aux enfants de 8 à 14 ans et se passe en cours collectif de 2 à 4 élèves.<br />
            Notre professeur de musique accompagnera votre enfant dans son apprentissage du piano et son éveil musical grâce
            à son esprit pédagogue.<br />
            Peu importe le niveau de votre enfant, débutant ou non, qu'il soit intéressé par le piano traditionnel ou le
            clavier électrique,
            le professeur pianiste revient sur les bases et fondamentaux du piano.
          </p>

          <LessonValueBox title="Un choix de morceaux adaptés" class="w-full md:w-1/2 3xl:w-1/4 py-5" color="#f57853" row>
            La méthode d'enseignement propose des morceaux écrits spécialement pour les enfants de cet âge, ce qui les
            rend plus ludiques.
            Les morceaux sont aussi adaptés au développement physiologique des enfants.
          </LessonValueBox>
          <LessonValueBox title="Une approche instantanée de l'instrument" class="w-full md:w-1/2 3xl:w-1/4 py-5" color="#f57853" row>
            Le désir naturel des enfants est de prendre contact avec la musique de manière concrète.
            Dès le premier cours de piano, ils expérimentent le plaisir de la musique en jouant la mélodie d’un premier
            morceau.
          </LessonValueBox>

          <LessonValueBox title="Des cours de piano collectifs" class="w-full md:w-1/2 3xl:w-1/4 py-5" color="#f57853" row>
            Les cours sont collectifs et chaque enfant a un instrument pour jouer.<br />
            Les cours de piano se font avec des élèves de même âge et de même niveau pour
            que tout le monde puisse évoluer de manière identique avec une émulation globale.
          </LessonValueBox>

          <LessonValueBox title="Un cours de piano diversifié" class="w-full md:w-1/2 3xl:w-1/4 py-5" color="#f57853" row>
            Durant les cours, on développe les capacités musicales globales.
            On apprend à interpréter une mélodie, au travers du développement de l'oreille, avec un apprentissage du
            rythme et de la lecture de notes.<br />
            Ces points de solfège sont développés au fur et à mesure de la progression du piano.
          </LessonValueBox>
        </div>
      </div>
  </section>
</template>

<script>
import CatchPhrase from "@/components/CatchPhrase.vue";
import LessonValueBox from "@/components/LessonValueBox.vue";
import FreeLesson from "@/components/FreeLesson.vue";

export default {
  name: "ChildrenLesson",
  components: {FreeLesson, LessonValueBox, CatchPhrase}
}
</script>

<style scoped>
.bg-music {
  color: purple;
  background-image: url("/img/fond-musical.jpg");
}

.goup {
  margin-top: -150px;
}

</style>
