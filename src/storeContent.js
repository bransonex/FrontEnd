import React from 'react'

// describe the data / fumctions
// that will be accessible to any component (global)
const store = React.createContext({
    cart: [],
user: {},

addProudcutToCart: () => {},
removeProductFromCart: () => {}
});

export default store;