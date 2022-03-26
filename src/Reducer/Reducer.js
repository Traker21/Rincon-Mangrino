
const estadoIncial = false

const ReducerRutas = (state = estadoIncial, action) => {

    switch (action.type) {
        case 'VERIFICACION':
            return state = true
        default:
            return false;
    }

}

export default ReducerRutas;
