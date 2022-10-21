// 최상위 상태 $store.state.counter
export const state = ( ) => ({
    counter: 0
})

export const mutations = {
    increment(state){
        state.counter++
    }
}