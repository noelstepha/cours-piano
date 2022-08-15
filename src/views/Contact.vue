<template>
  <section>
  <div class="relative align-right w-full h-80">
    <div class="gmap_canvas">
      <iframe width="100%" height="320px" id="gmap_canvas" src="https://maps.google.com/maps?q=15%20rue%20Laganne%2031300%20Toulouse&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </div>
  </div>
    <div class="mx-auto w-3/4 md:w-1/2 p-10 text-center">
      Espace Musical des Blanchers vous accueille dans le quartier de St Cyprien de Toulouse,
      dans le département de la Haute-Garonne,
      pour des cours de musique (piano, piano numérique, claviona, ou clavier).
    </div>
    <div class="flex flex-wrap  p-10">
      <div class="w-full md:w-1/2 px-5 pb-10 flex flex-col items-center text-center">
        <Title text="Adresse"></Title>
        <div class="my-3">
          Espace Musical des Blanchers<br />
          15 rue Laganne<br />
          31300 Toulouse<br />
        </div>
        05 62 48 38 33<br />
        espace.blanchers@gmail.com
      </div>
      <div class="w-full md:w-1/2 px-5  flex flex-col items-center text-center">
        <Title text="Moyen d'accès"></Title>
        <div class="my-1">Tramway ligne T1 - T2, arrêt Fer à Cheval à 1 minutes</div>
        <div class="my-1">Métro ligne A, arrêt St Cyprien à 10 minutes</div>
        <div class="my-1">Bus ligne 13 - 14 - 31, (50 mètres)</div>
        <div class="my-1">Vélo libre service (50 mètres)</div>
        <div class="my-1">Parking Cours Dillon</div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "@/components/Title.vue";
export default {
  name: "Contact",
  components: {Title}
}
</script>

<style scoped>
.mapouter{
  position:relative;
  text-align:right;
  height:500px;
  width:600px;
}
.gmap_canvas {
  overflow:hidden;
  background:none!important;

}
</style>
