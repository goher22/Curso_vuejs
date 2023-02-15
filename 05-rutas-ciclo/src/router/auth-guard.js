const isAuthenticatedGuard = async (to, from, next) => {
    return new Promise(()=> {
        const ramdom = Math.random() * 100;
        if(ramdom > 50){
            console.log('está autenticado')
            next();
        }else{
            console.log('bloqueado por el isAuthenticatedGuard', ramdom);
            next({name: 'pokemon-home'})
        }
    })
}

export default isAuthenticatedGuard;