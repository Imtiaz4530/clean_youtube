import { action, persist } from "easy-peasy";

const recentModel = persist({
    items: [],
    setRecent: action((state, payload) => {
        state.items.unshift(payload)
        state.items.slice(0, 4)
    }),
})

export default recentModel