const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) =>
    console.log(`Atualmente está ${toFahrenheit(getMarsTemperature())}ºF em Marte`);

const greet = (temperature) =>
    console.log(`Olá! Curiosity aqui. Nesse momento está ${getMarsTemperature()}ºC em Marte`);

const handleError = (errorReason) =>
    console.log(`Error getting temperature: ${errorReason}`);

const sendMarsTemperature = (callback1, callback2) => {
    if (Math.floor(Math.random() * 10) < 6) {
        return callback1();
    }
    return callback2('Robô está ocupado');
}

sendMarsTemperature(temperatureInFahrenheit, handleError);
sendMarsTemperature(greet, handleError);

/* Exe 7 */
const uppercase = (str, callback) => {
    setTimeout(() => {
        callback(str.toUpperCase());
    }, 500);
};

module.exports = uppercase;
