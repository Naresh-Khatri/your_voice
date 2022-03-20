import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import main from "./main";
import { LocalStorage } from "quasar";

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    state() {
      return {
        voice: LocalStorage.getItem("voice") || null,
        rate: LocalStorage.getItem("rate") || 1,
        voices: [],
        savedTexts: [
          "మీ ఆరోగ్యం త్వరలో కుదుట పడాలని కోరుకుంటున్నాను",
          "మీరు(నువ్వు) ఆంగ్లం(ఆంగ్ల భాష) మాట్లాడగలరా(వా)?",
          // "His ultimate dream fantasy consisted of being content and sleeping eight hours in a row.",
          // "He decided to fake his disappearance to avoid jail.",
          // "There were white out conditions in the town; subsequently, the roads were impassable.",
          // "She wasn't sure whether to be impressed or concerned that he folded underwear in neat little packages.",
          // "There is no better feeling than staring at a wall with closed eyes.",
          // "Tomorrow will bring something new, so leave today as a memory.",
          // "Nobody has encountered an explosive daisy and lived to tell the tale.",
        ],
      };
    },
    mutations: {
      updateRate(state, newRate) {
        state.rate = newRate;
        LocalStorage.set("rate", newRate);
      },
      updateVoice(state, newVoice) {
        state.voice = newVoice;
        LocalStorage.set("voice", newVoice);
      },
      updateVoiceList(state, voiceList) {
        state.voices = voiceList;
        // console.log(state.voices);
      },
      updateTexts(state, textsArr) {
        state.savedTexts = textsArr;
      },
      addText(state, text) {
        state.savedTexts.push(text);
        // console.log(typeof LocalStorage.getItem("savedTexts"));
        if (Array.isArray(LocalStorage.getItem("savedTexts")))
          LocalStorage.set("savedTexts", state.savedTexts);
        else LocalStorage.set("savedTexts", [text]);
        console.log(LocalStorage.getItem("savedTexts"));
      },
      removeText(state, index) {
        if (state.savedTexts[index]) {
          const poppedText = state.savedTexts.splice(index, 1);
          LocalStorage.set("savedTexts", state.savedTexts);
          console.log(poppedText);
        }
      },
    },
    actions: {
      getSavedTexts({ commit }) {
        const oldTexts = LocalStorage.getItem("savedTexts");
        if (oldTexts) commit("updateTexts", oldTexts);
      },

      populateVoiceList({ commit }) {
        speechSynthesis.onvoiceschanged = () => {
          // console.log(speechSynthesis.getVoices());
          const voices = speechSynthesis.getVoices().map((voice) => {
            return Object.assign(voice, { label: voice.name });
          });
          commit("updateVoiceList", voices);
          if (
            typeof LocalStorage.getItem("voice") !== window.SpeechSynthesisVoice
          ) {
            commit("updateVoice", voices[0]);
          }
        };

        // setTimeout(() => {
        //   state.voices = speechSynthesis.getVoices();
        //   console.log("getting all voices", state.voices);
        // }, 100);
      },
    },
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
