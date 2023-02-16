import getRamdomInt from "@/herlpers/getRandomint";
export const incrementRandomInt = async ({commit}) => {
    commit('setLoading', true)
    const randomInt = await getRamdomInt();
    
    commit('incrementBy', randomInt);
    commit('setLoading', false)
}