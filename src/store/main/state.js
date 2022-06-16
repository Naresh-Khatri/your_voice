import { LocalStorage } from "quasar";

export default function () {
  return {
    rate: LocalStorage.getItem("rate") || 1,
    voice: LocalStorage.getItem("voice") || null,
  };
}
