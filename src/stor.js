import { proxy } from "valtio";


let state = proxy({
    menu: false,
    startday: null,
    endtday: null,
    zbi: false
})

export default state