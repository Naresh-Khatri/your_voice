<template>
  <!-- notice dialogRef here -->
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-pa-md q-dialog-plugin">
      <q-select
        v-model="selectedVoice"
        :options="voices"
        label="select voice"
        @update:model-value="setVoice"
      >
        <template v-slot:prepend>
          <q-icon name="record_voice_over_icon" />
        </template>
      </q-select>
      <q-badge label="rate" />
      <q-slider
        v-model="rate"
        @change="setRate"
        :min="0.25"
        :max="2"
        :step="0.25"
        label
        label-always
        color="light-green"
      />
      <q-card-actions align="right">
        <q-btn color="primary" label="OK" @click="onOKClick" />
        <q-btn color="primary" label="Cancel" @click="onCancelClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import { useQuasar, useDialogPluginComponent } from "quasar";
import { useStore } from "vuex";
const emits = defineEmits([...useDialogPluginComponent.emits]);

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
  useDialogPluginComponent();
const onOKClick = () => {
  onDialogOK();
};

const $q = useQuasar();
const $store = useStore();

const voices = ref([]);
const selectedVoice = ref($store.state.voice);
const rate = ref($store.state.rate);
const setVoice = () => {
  console.log("setting voice to", selectedVoice.value);
  $store.commit("updateVoice", selectedVoice.value);
};
const setRate = () => {
  $store.commit("updateRate", rate.value);
};
// watchEffect(() => {

//   $q.localStorage.set("rate", rate.value);
//   $q.localStorage.set("voice", selectedVoice.value);

//   console.log($q.localStorage.getItem("rate"));
//   console.log($q.localStorage.getItem("voice"));
// });
onMounted(() => {
  selectedVoice.value = $q.localStorage.getItem("voice");
  rate.value = $q.localStorage.getItem("rate");

  voices.value = speechSynthesis.getVoices();
  setTimeout(() => {
    voices.value = speechSynthesis.getVoices().map((voice) => {
      return Object.assign(voice, { label: voice.name, value: voice.name });
    });
    console.log(voices.value);
  }, 1000);
});

const onCancelClick = onDialogCancel;
</script>
