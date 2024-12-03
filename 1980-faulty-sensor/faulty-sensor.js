/**
 * @param {number[]} sensor1
 * @param {number[]} sensor2
 * @return {number}
 */
var badSensor = function(sensor1, sensor2) {
    for(let i = 0; i < sensor1.length; i++){
        if(sensor1[i] != sensor2[i]){
            if(sensor1[i] == sensor2[i + 1] && sensor1[i + 1] !== sensor2[i]) return 1
            if(sensor1[i + 1] == sensor2[i] && sensor1[i] !== sensor2[i + 1]) return 2
        }
    }

    return -1
};