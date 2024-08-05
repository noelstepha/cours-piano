<template>
  <section
      class="flex items-center mb-12 bg-cover bg-center w-full text-5xl italic text-white font-baskerville bg-pricing">
    <h1 class="h-80 flex justify-center items-center text-center w-full goup">Tarifs et Horaires des cours de piano</h1>
  </section>
  <section class="p-10 flex flex-wrap">
    <div class="w-full md:w-1/2 p-5">
      <Title text="Tarifs"></Title>
      <p>
        Le tarif des cours est calculé sur l'année scolaire et divisé en mensualités.<br />
        De ce fait, le tarif est le même pour tous les mois de l'année scolaire.<br />
        Dans le cas où vous souhaiteriez interrompre l'apprentissage en cours d'année, vous n'êtes pas engagé pour une année scolaire entière.<br /><br />
        Les inscriptions sont possibles tout au long de l’année.
      </p>
      <table class="my-5">
        <tbody>
        <tr class="bg-irish text-white">
          <td>
            <div class="flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
          </td>
          <td class="p-5">
            <div>Enfants</div>
            <div>(8 à 14 ans)</div>
          </td>
          <td class="p-5">
            <div>Adultes</div>
            <div>(> 14 ans)</div>
          </td>
        </tr>
        <tr>
          <td class="bg-irish text-white p-5">
            <div>Cours de groupe</div>
            <div>1H / semaine</div>
          </td>
          <td class="p-5 text-center">
            120 € / mois
          </td>
          <td class="p-5 text-center">
            120 € / mois
          </td>
        </tr>
        <tr>
          <td class="bg-irish text-white p-5">
            <div>Cours individuels</div>
            <div>45min / semaine</div>
          </td>
          <td class="p-5 text-center">
            -
          </td>
          <td class="p-5 text-center">
            120 € / mois
          </td>
        </tr>
        <tr>
          <td class="bg-irish text-white p-5">
            <div>Frais d'inscription</div>
            <div class="text-xs">(1ere année seulement)</div>
          </td>
          <td class="p-5 text-center">
            25 €
          </td>
          <td class="p-5 text-center">
            25 €
          </td>
        </tr>
        </tbody>
      </table>
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
        Périodes de vacances scolaires :<br />
        Les cours continuent pendant les vacances de la Toussaint.<br />
        Il n'y a pas cours pendant les vacances de Noël.<br />
        Il y a cours pendant la première semaine des vacances d'hiver.<br />
        Il y a cours pendant la première semaine des vacances de printemps.<br />
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
table tr td {
  border: 1px solid #c9bfbf4a;
}

.bg-pricing {
  background-image: url('/img/bg-notes2.jpg');
}
</style>
