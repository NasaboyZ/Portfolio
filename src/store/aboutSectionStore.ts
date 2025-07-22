import { create } from "zustand";

interface AboutSectionState {
  text: string;
  setText: (text: string) => void;
}

const useAboutSectionStore = create<AboutSectionState>((set) => ({
  text: "Als Web Design Developer studiere ich am SAE Institute Zürich für meinen Bachelor. Mit meiner Leidenschaft für Design und Entwicklung gestalte ich meine Welt.",
  setText: (text) => set({ text }),
}));

export default useAboutSectionStore;
