import storage from 'redux-persist/lib/storage';

import { persistReducer } from 'redux-persist';

export default reducers => {
    const persistedReducer = persistReducer(
        {
            key: 'fastfeet',
            storage,
            whitelist: ['auth', 'admin'],
        },
        reducers
    );

    return persistedReducer;
};

// Caso precise mudar o que será salvo é só adicionar ou remover os reducers do whitelist
