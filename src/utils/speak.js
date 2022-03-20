import store from "../store/index.js";
import { computed } from "vue";

const $store = computed(() => store());

export function speak(text) {
  console.log($store.value.state);
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  utterance.voice =
    $store.value.state.voice || speechSynthesis.getVoices()[props.id];
  utterance.rate = $store.value.state.rate;
  speechSynthesis.speak(utterance);
  console.log(utterance);
  // console.log(speechSynthesis);
  // console.log(speechSynthesis.getVoices());
}
