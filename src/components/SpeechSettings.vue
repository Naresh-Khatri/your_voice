<template>
  <!-- notice dialogRef here -->
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-pa-md q-dialog-plugin">
      <q-select
        v-model="selectedVoice"
        :options="voices"
        label="select voice"
        @input-value="setVoice"
      >
        <template v-slot:prepend>
          <q-icon name="record_voice_over_icon" />
        </template>
      </q-select>
      <q-badge label="rate" />
      <q-slider
        v-model="rate"
        :min="0.25"
        :max="2"
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
import { ref, onMounted } from "vue";
import { useDialogPluginComponent } from "quasar";

const emits = defineEmits([
  // REQUIRED; need to specify some events that your
  // component will emit through useDialogPluginComponent()
  ...useDialogPluginComponent.emits,
]);

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
  useDialogPluginComponent();
const onOKClick = () => {
  // on OK, it is REQUIRED to
  // call onDialogOK (with optional payload)
  onDialogOK();
  // or with payload: onDialogOK({ ... })
  // ...and it will also hide the dialog automatically
};

const voices = ref([]);
const selectedVoice = ref(null);
const rate = ref(1);
const setVoice = () => {
  console.log("setting");
};
onMounted(() => {
  voices.value = speechSynthesis.getVoices();
  setTimeout(() => {
    voices.value = speechSynthesis.getVoices().map((voice) => {
      return { label: voice.name, value: voice.name, lang: voice.lang };
    });
    console.log(voices.value);
  }, 1000);
});

const onCancelClick = onDialogCancel;
</script>
