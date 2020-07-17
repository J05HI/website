import { MutationTree } from 'vuex'

export const state = () => ({
  open: false,
})

export type MenuModuleState = ReturnType<typeof state>

export const mutations: MutationTree<MenuModuleState> = {
  toggle(state, open) {
    state.open = open !== undefined ? open : !state.open
  },

  close(state) {
    state.open = false
  },
}
