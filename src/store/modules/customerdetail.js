const state = () => {
    return {
        masterData: null,
        loaded: false,
        busy: false
    }
}
const getter = {
}

const mutations = {
    changeBusy(state, busy) {
        state.busy = busy;
    },
    changeLoadedData(state, loaded) {
        state.loaded = loaded;
    },
    changeMasterData(state, data) {
        state.masterData = data;
    },
}
const actions = {
    changeBusy({ commit }, busy) {
        commit('changeBusy', busy)
    },
    changeLoadedData({ commit }, loaded) {
        commit('changeLoadedData', loaded)
    },
    changeMasterData({ commit }, data) {
        commit('changeMasterData', data)
    }
}

export default {
    namespaced: true,
    state,
    getter,
    mutations,
    actions
}