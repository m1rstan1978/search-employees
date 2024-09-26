export const getEmployeer = {
  state: {
    arrEmployeer: null,
    loading: false,
    inputValue: "",
    activeEmployeer: null,
  },
  getters: {
    getEmployeer(state) {
      return state.arrEmployeer;
    },
    getLoading(state) {
      return state.loading;
    },
    getInputVal(state) {
      return state.inputValue;
    },
    getActiveEmployeer(state) {
      return state.activeEmployeer;
    },
  },
  mutations: {
    setEmployeer(state, arr) {
      state.arrEmployeer = arr;
    },
    setLoading(state, variable) {
      state.loading = variable;
    },
    setInputVal(state, val) {
      state.inputValue = val;
    },
    setActiveEmployeer(state, employeer) {
      state.activeEmployeer = employeer;
    },
  },
  actions: {
    async fetchUsers({ state, commit }, data) {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users${data}`
        );
        const response_json = await response.json();
        commit("setEmployeer", response_json);
      } catch (e) {
        alert(e);
      } finally {
        commit("setLoading", false);
      }
    },
  },
};
