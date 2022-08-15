<template>
<div class="flex flex-wrap text-sm text-white text-center md:text-left">
  <div class="w-full md:w-1/3 p-5 flex flex-col items-center">
    <div>
      <div class="text-xl font-bold mb-3">Explorer</div>
      <router-link to="/" class="inline-block my-1">Accueil</router-link><br />
      <router-link to="/children" class="inline-block my-1">Cours enfants</router-link><br />
      <router-link to="/adult" class="inline-block my-1">Cours adultes et ados</router-link><br />
      <router-link to="/pricing" class="inline-block my-1">Tarifs/Horaires</router-link><br />
      <router-link to="/contact" class="inline-block my-1">Contact</router-link><br />
    </div>
  </div>
  <div class="w-full md:w-1/3 p-5 flex flex-col items-center">
    <div>
      <div class="text-xl font-bold mb-3">Adresse</div>
      Espace Musical des Blanchers<br />
      15 rue Laganne<br />
      31300 Toulouse<br /><br />
      05 62 48 38 33<br />
      <a href="mailto:espace.blanchers@gmail.com">espace.blanchers@gmail.com</a>
    </div>
  </div>
  <div class="w-full md:w-1/3 p-5 flex flex-col items-center">
      <div class="text-xl font-bold mb-3">Réseaux sociaux</div>
      <div class="flex-grow">
        Pour plus d'informations, suivez nous sur notre page <a href="https://www.facebook.com/Espace-Musical-des-Blanchers-108883338593799">Facebook</a>
        <a href="https://www.facebook.com/Espace-Musical-des-Blanchers-108883338593799">
          <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto"  viewBox="0 0 48 48" width="48px" height="48px">
            <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"/><stop offset="1" stop-color="#007ad9"/></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"/><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"/><br />
          </svg>
        </a>
      </div>

  </div>
  <div class="w-full flex justify-center p-3">
    <span class="mx-5">© Espace Musical des Banchers</span> | <span class="mx-5">Tous Droits Réservés</span>
  </div>
</div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>
