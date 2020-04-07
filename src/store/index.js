import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [],
        inputVal: '123',
        nextId: 5
    },
    mutations: {
        initList(state, list) {
            state.list = list
        },
        handleChange(state, val) {
            state.inputVal = val
        },
        addList(state) {
            const obj = {
                id: state.nextId,
                info: state.inputVal.trim(),
                done: false
            }
            state.list.push(obj)
            state.nextId++
                state.inputVal = ''
        }
    },
    actions: {
        getList(context) {
            axios.get('/list.json').then(({ data }) => {
                context.commit('initList', data)
            })
        }
    }
})