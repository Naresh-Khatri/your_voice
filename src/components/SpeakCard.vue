<template>
  <div
    class="flex items-center shadow-6 row container q-pa-md q-py-lg text-white"
  >
    <div class="col-10 text-bold text-h6">
      {{ props.text }}
    </div>
    <div class="col-2">
      <q-btn
        icon="play_arrow"
        color="white"
        class="text-black"
        round
        @click="speak"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({ id: Number, text: String });
onMounted(() => {
  console.log(props);
});

const speak = () => {
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = props.text;
  utterance.voice = speechSynthesis.getVoices()[props.id];
  utterance.rate = 1;
  console.log(utterance);
  console.log(speechSynthesis);
  console.log(speechSynthesis.getVoices());
  speechSynthesis.speak(utterance);
};
</script>
<style>
.container {
  width: 100%;
  /* background: #298cff; */
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23220000' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23440000' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23660000' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23880000' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23A00' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  border-radius: 25px;
}
textarea {
  font-size: 2em;
  line-height: 6;
}
</style>
