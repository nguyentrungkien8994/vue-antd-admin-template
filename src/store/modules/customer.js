const state = () => {
    return {
        dataObject: {
            title: 'Khách hàng',
            loading: true,
            current:1,
            total:0,
            pageSize: 20,
            data: [
            ],
            masterData:null,
            loadingform: false
        }
    }
}
const getter = {
}

const mutations = {
    changeState(state, data) {
        state.dataObject.loading = data.loading;
        state.dataObject.current = data.current;
        state.dataObject.total = data.total;
        state.dataObject.filters = data.filters;
        state.dataObject.sorters = data.sorters;
    },
    changeLoading(state,loading){
        state.dataObject.loading = loading;
    },
    changeLoadingForm(state,loading){
        state.dataObject.loadingform = loading;
    },
    changeData(state, data) {
        state.dataObject.data = data;
    },
    changeMasterData(state, data) {
        state.dataObject.masterData = data;
    },
}
const actions = {
    changeState({commit},data) {
        commit('changeState', data)
    },
    changeData({commit},data) {
        commit('changeData', data)
    },
    changeMasterData({commit},data) {
        commit('changeMasterData', data)
    },
    changeLoadingForm({commit},loading){
        commit('changeLoadingForm', loading)
    },
    changeLoading({commit},loading){
        commit('changeLoading', loading)
    },
}

export default {
    namespaced: true,
    state,
    getter,
    mutations,
    actions
}