// const { envs } = require('./config/env');
import { envs } from './config/env.js';

// const {startServer} = require('./server/server')
import {startServer} from './server/server.js';

export const main = ()=>{
        startServer({
            port: envs.PORT,
            public_path: envs.PUBLIC_PATH
        })
    }
    
    // Funcion Agnostica Autoconvocada
    // Agnóstica: porque no tiene nombre
    // Autoconvocada: porque la ejecturamos en los paréntesis.
( async () =>{
    main()
})()