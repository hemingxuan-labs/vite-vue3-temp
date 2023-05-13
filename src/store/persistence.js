const persistence = {
    state: () => ({
        userName: 'zhangsiyuan'
    }),
    mutations: {
        setUserName(state, data) {
            state.userName = data
        }
    }
}
export default persistence
