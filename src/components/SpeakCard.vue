<template>
  <q-slide-item
    @left="onLeftSlide"
    style="border-radius: 25px"
    class="bg-transparent"
    left-color="red"
  >
    <template v-slot:left>
      <!-- <q-icon name="done" /> -->
      Removing in
      <q-knob
        class="q-mx-lg"
        show-value
        :max="3000"
        :model-value="timer"
        size="md"
      />
      <q-btn label="undo" icon="undo" @click="undoRemoval" />
    </template>
    <div
      class="flex items-center shadow-6 row container q-pa-md q-py-lg text-white"
    >
      <div class="col-10 text-bold text-h6">
        <!-- {{ props.id }} -->
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
  </q-slide-item>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useQuasar } from "quasar";

const props = defineProps({ id: Number, text: String });

const $q = useQuasar();
const $store = useStore();

onMounted(() => {
  setTimeout(() => {
    // console.log($store.state.voice, speechSynthesis.getVoices()[1]);
  }, 1000);
});

const speak = () => {
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = props.text;
  utterance.voice = $store.state.voice || speechSynthesis.getVoices()[props.id];
  // utterance.voice = speechSynthesis.getVoices()[props.id];
  utterance.rate = $store.state.rate;
  console.log($store.state);
  // console.log(utterance);
  // console.log(speechSynthesis);
  // console.log(speechSynthesis.getVoices());
  speechSynthesis.speak(utterance);
};

const timer = ref(3000);
const interval = ref(null);

let resetFn = null;
//get reset funtion to set initial slide position
const onLeftSlide = ({ reset }) => {
  resetFn = reset;
  interval.value = setInterval(() => {
    timer.value -= 100;
    if (timer.value <= 0) {
      clearInterval(interval.value);
      timer.value = 3000;
      $store.commit("removeText", props.id);
      $q.notify({
        message: "Text removed!👀",
        color: "warn",
        icon: "warn",
      });
      resetFn();
    }
  }, 100);
};

const undoRemoval = () => {
  clearInterval(interval.value);
  timer.value = 3000;
  resetFn();
};
</script>
<style lang="scss">
.container {
  width: 100%;
  background-color: $secondary;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%230d0d32' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%231a1965' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23262697' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%233332ca' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23403FFC' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  border-radius: 25px;
}
textarea {
  font-size: 2em;
  line-height: 6;
}
</style>
