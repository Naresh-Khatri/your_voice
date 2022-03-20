<template>
  <q-page class="background flex flex-center">
    <!-- {{ interimText }}
    <br />
    {{ finalText }} -->
    <q-input
      v-model="finalText"
      placeholder="Your text appears here"
      readonly=""
      rounded
      outlined
      clearable
      type="textarea"
      style="width: 90vw"
    />
    <!-- <q-input type="textarea" style="width: 100%" v-model="finalText" /> -->
    <div class="btn-container">
      <q-btn class="relative" flat round @click="toggleListening">
        <q-icon
          :color="isListening ? 'red' : 'black'"
          class="q-ma-xl"
          name="fas fa-microphone"
          size="200px"
        />
      </q-btn>
    </div>
    <transition
      appear
      enter-active-class="animated jackInTheBox"
      leave-active-class="animated bounceOut"
    >
      <!-- Wrapping only one DOM element, defined by QBtn -->
      <q-chip
        v-if="interimText != finalText"
        style="position: absolute"
        :key="interimText"
        :label="interimText"
        color="positive"
        class="text-white"
        size="xl"
      />
    </transition>
    <h3 class="text-center" :class="isListening ? 'text-red' : 'text-black'">
      {{ isListening ? "Listening... " : "Not listening" }}
    </h3>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";

const interimText = ref("");
const finalText = ref("");
const isListening = ref(false);

const speechRecognition = new webkitSpeechRecognition();
speechRecognition.continuous = true;
speechRecognition.interimResults = true;

onMounted(() => {
  setInterval(() => {
    document.querySelector(
      ".btn-container"
    ).style.borderRadius = `${getRandomNum(50, 90)}% ${getRandomNum(
      50,
      90
    )}% ${getRandomNum(50, 90)}% ${getRandomNum(50, 90)}% / ${getRandomNum(
      50,
      90
    )}% ${getRandomNum(50, 90)}% ${getRandomNum(50, 90)}% ${getRandomNum(
      50,
      90
    )}%`;
  }, 1000);
  speechRecognition.onstart = () => {
    console.log("started");
    isListening.value = true;
  };
  speechRecognition.onend = () => {
    console.log("ended");
    isListening.value = false;
  };
  speechRecognition.onerror = (err) => {
    console.log("Speech recognition error detected: " + err.error);
    console.log("Additional information: " + err.message);
  };
  speechRecognition.onresult = (e) => {
    // console.log(e);
    showResults(e);
  };
  // console.log(speechRecognition);
});
const getRandomNum = (min, max) => {
  return Math.random() * (max - min) + min;
};
const toggleListening = () => {
  if (!isListening.value) {
    speechRecognition.start();
  } else speechRecognition.stop();
  isListening.value = !isListening.value;
};
const showResults = ({ results, resultIndex, timeStamp }) => {
  console.log(results, resultIndex);
  for (let i = resultIndex; i < results.length; i++) {
    if (results[i].isFinal) {
      // console.log(results[0][0].transcript);
      finalText.value = results[i][0].transcript;
    } else {
      interimText.value = results[i][0].transcript;
    }
  }
  // results[0].forEach((result) => {
  //   if (result.isFinal) finalText.value += result[0].transcript;
  // });
};
</script>
<style>
.background {
  background-color: #00b7ff;
  background-attachment: fixed;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='540' height='450' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/svg%3E");
}
.q-field__control {
  border-radius: 25px;
  background: white;
}
input[type="textarea"] {
  font-size: 2em;
  line-height: 1.6;
}
.btn-container {
  background: white;
  border-radius: 70% 60% 50% 40% / 40% 50% 60% 70%;
  transition: all 1s;
  /* animation: spin 12s linear infinite; */
}
@keyframes morph {
  0% {
    border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;
  }
  100% {
    border-radius: 40% 60%;
  }
}

@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}
</style>
