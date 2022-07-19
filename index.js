// 1 - Hello world
//
// const writeSentence = () => {
//     return new Promise ( (resolve, reject) => {
//         setTimeout ( () => {
//             resolve("hello world")
//         }, 2000)
//        
//     })
// }
// const waitForResult = async () => {
//     const result = await writeSentence()
//     console.log(result)
// }
// waitForResult()

// 2 - Il fait froid
//
// const isWarm = () => {
//     return new Promise ( (resolve, reject) => {
//         const temperature = 15
//         setTimeout ( () => {
//             temperature <= 5 ? resolve("Il fait froid") : resolve("Il fait chaud")
//         }, 4000)    
//     })
// }
// const waitForResult = async () => {
//     const result = await isWarm()
//     console.log(result)
// }
// waitForResult()

// 3 - Ménage
//
const doLaundry = () => {
    return new Promise ( (resolve, reject) => {
        console.log("Je commence la lessive")
        setTimeout ( () => {
            resolve("j'ai fini la lessive")
        }, 3000)
    })
}
const cleanDishes = () => {
    return new Promise ( (resolve, reject) => {
        console.log("Je commence à faire la vaisselle")
        setTimeout( () => {
            resolve("j'ai fini la vaiselle")
        }, 1500)
    })
}
const cleanUp = async () => {
    let result = await doLaundry()
    console.log(result)
    result = await cleanDishes()
    console.log(result)
    console.log("j'ai fini de faire le ménage")
}
cleanUp()