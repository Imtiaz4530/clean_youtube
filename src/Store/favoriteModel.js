import { action, persist } from "easy-peasy";

const favoriteModel = persist({
    items: [],
    setFavList: action((state, payload) => {
        if (state.items.includes(payload)) {
            return
        }

        state.items.push(payload)
        state.items.slice(0, 4)
    }),

    removeFav: action((state, payload) => {

        if (!state.items.includes(payload)) {
            return
        }
        state.items = state.items.filter((item) => item !== payload)
    })
})

export default favoriteModel