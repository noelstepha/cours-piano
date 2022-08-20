<template>
  <section
      class="flex items-center mb-12 bg-cover bg-center w-full text-5xl italic text-white font-baskerville bg-adult">
    <h1 class="h-80 flex justify-center items-center text-center w-full">Cours pour adultes et adolescents </h1>
  </section>
  <section>

    <div class="container mx-auto mb-10">
      <div class="flex flex-wrap align-start justify-start mx-5 md:mx-10 lg:mx-20">
        <FreeLesson class="mb-10" center color-rotation="164"/>
        <div class="p-10">
          Ce cours de piano s’adresse aux adultes et aux adolescents à partir de 15 ans.<br />
          La méthode d'enseignement est conçue pour les débutants et les élèves expérimentés.<br />
          Quel que soit votre niveau, débutant ou expérimenté, il y aura toujours un cours de piano qui vous correspondra.
        </div>
        <LessonValueBox title="Des cours individuels ou collectifs" class="w-full" color="#bd9667" row>
          Les cours de piano se déroulent en cours collectifs pour les enfants,
          par contre les adultes peuvent choisir entre les cours individuels et les cours collectifs.<br />
          Les cours collectifs se font avec des élèves de même âge et de même niveau pour que tout les élèves puissent évoluer
          de manière identique avec une émulation globale.<br />
          Chaque élève ayant un instrument pour jouer.
        </LessonValueBox>

        <LessonValueBox title="Un plaisir musical immédiat" class="w-full" row color="#bd9667">
          Dès le premier cours, les élèves apprennent à jouer un morceau de piano et touchent du doigt leurs premières sensations musicales.<br />
          Contrairement aux idées reçues, il n'y a pas d'âge limite pour commencer à apprendre le piano.<br />
          Vos seules limites étant votre envie et votre volonté.
        </LessonValueBox>

        <LessonValueBox title="Une pédagogie évolutive" class="w-full" color="#bd9667" row>
          Grace à une pédagogie moderne, durant les cours, vous allez apprendre à jouer du piano, mais aussi apprendre
          comment pratiquer pendant la semaine, au travers d'outils spécifiques.
          S'entrainer ne nécessite pas que de l'obstination, il faut aussi la bonne méthode.
          L’enseignement du solfège évolue avec la pratique de l’instrument.<br />
          A chaque nouveau morceau, l'élève apprend les nouveaux points de solfège lui permettant de mieux comprendre la partition.
          Ainsi, pas besoin d'avoir d'exercices de solfège.
          L'apprentissage se faisant au travers de la pratique du piano.<br />
          Durant les cours, on développe les capacités musicales globales (mélodie, oreille, rythme lecture et théorie) au travers de l’apprentissage du clavier.
        </LessonValueBox>

        <LessonValueBox title="Un répertoire adapté à vos gouts musicaux" class="w-full" color="#bd9667" row>
          Grace à des musiques variées et de tout style, les élèves progressent tout en se faisant plaisir.<br />
          Ayant plus de 15 ans d'expérience d'enseignement et bien plus, de pratique de la musique,
          je peux vous proposer un répertoire de musiques, large et varié, quelque soit votre âge et votre univers musical.
        </LessonValueBox>

        <LessonValueBox title="Instruments de cours" class="w-full" color="#bd9667" row>
          Les cours se déroulent sur des Yamaha Clavinova, qui sont des pianos numériques.
          Ces instruments permettent d'avoir le meilleur compromis avec l'instrument que possèdent les élèves.
          Ils se rapprochent au mieux possible d'un vrai piano tout en ayant les fonctionnalités d'un synthétiseur.<br />
          Quelque soit le répertoire musical pratiqué en cours, il y aura toujours une fonctionnalité permettant de rendre l'apprentissage confortable.
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
  name: "AdultLesson",
  components: {LessonValueBox, CatchPhrase, FreeLesson}
}
</script>

<style scoped>
.bg-adult {
  background-image: url("/img/sheet-flower.jpg");
}
</style>
