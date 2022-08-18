<template>
  <CatchPhrase bg-class="bg-pricing">
    <h1 class="h-80 flex justify-center items-center text-center w-full">Tarifs et Horaires des cours de piano</h1>
  </CatchPhrase>
  <section class="p-10 flex flex-wrap">
    <div class="w-full md:w-1/2 p-5">
      <Title text="Tarifs"></Title>
      <p>
        Cours de groupe pour adultes et enfants :<br />
        94€ par mois pour 1H de cours par semaine en cours de groupe<br /><br />

        Cours individuels uniquement pour les adultes :<br />
        94€ par mois pour 45 min de cours par semaine en cours individuel<br /><br />


        Le tarif des cours est calculé sur l'année scolaire et divisé en mensualités.
        De ce fait, le tarif est le même pour tous les mois de l'année scolaire.<br />
        Dans le cas où vous souhaiteriez interrompre l'apprentissage en cours d'année, vous n'êtes pas engagé pour une année scolaire entière.<br /><br />
      </p>
    </div>
    <div class="w-full md:w-1/2 p-5">
      <Title text="Horaires"></Title>
      <div>
        Lundi	 10H00 - 21H30<br />
        Mardi	 10H00 - 21H30<br />
        Mercredi 	 10H00 - 21H30<br />
        Jeudi	 10H00 - 21H30<br />
        Vendredi 	10H00 - 20H00<br /><br />

        Les cours se font uniquement sur rendez-vous, avec le même horaire pour chaque semaine.<br />
        Les cours sont dispensés tout au long de la journée jusqu'en soirée.<br />
        Il y a possibilité d'avoir cours entre midi et 14h, et le soir après le travail.<br /><br />
      </div>
    </div>
  </section>
</template>

<script>
import Title from "@/components/Title.vue";
import CatchPhrase from "@/components/CatchPhrase.vue";
export default {
  name: "Prices",
  components: {Title, CatchPhrase}
}
</script>

<style scoped>

</style>
