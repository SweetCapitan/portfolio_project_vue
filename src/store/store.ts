import {reactive} from "vue";

export enum Selection {
  Home,
  About,
  Works,
}

interface selectionInterface {
  observedSection: Selection
}

export  const sectionStore: selectionInterface = reactive({
  observedSection: Selection.Home
})

