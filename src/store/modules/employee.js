const state = () => {
    return {
        title: 'Contact',
        count:0,
        datas: []
    }
}
const getter = {}

const mutations = {
    setData(state, datas) {
        state.datas = datas
    }
}

const actions = {
    getAllData(context) {
        var contacts = [];
        context.commit('setData', contacts);
    }
}

export default {
    namespaced: true,
    state,
    getter,
    mutations,
    actions
}