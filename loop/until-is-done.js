/**
 * create an factory from 800 to 820
 */
const startFactory = 800, endFactory = 820;
const factories = Array.from({ length: endFactory - startFactory + 1 }, (x, i) => startFactory + i);
// console.log(factories);

/**
 * factories with dummy data
 */
const setFlag = 802;
let dataWithFactories = {}
for (const factory of factories) {
    // console.log(factory);
    if (factory == setFlag) {
        dataWithFactories[factory] = true
    } else {
        dataWithFactories[factory] = false
    }
}
// console.log(dataWithFactories);

/**
 * loop until is done
 */
for (const [key, value] of Object.entries(dataWithFactories)) {
    // console.log('factory', key, value);
    if (value) {
        console.log(`${key} is done!`);
        break
    } else {
        console.log(`${key} is not set!, try again...`);
    }
}