const { envs } = require('./config/env');

const {startServer} = require('./server/server')

const main = ()=>{
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