import {wheightScales} from './Constants'

export const calcBmi=(weight, height)=>{
    const res = weight/(Math.pow(height/100,2))
    return res.toFixed(1)
}

export const getIndexScale = (weight) =>{
    if(weight < 18.5)
        return 0
    else if(weight <=24.9)
        return 1
    else if(weight <=29.9)
        return 2
    else if(weight <=34.9)
        return 3
    else if(weight <=39.9)
        return 4
    else
        return 5
}

export const getScaleFromWheight = (weight) => wheightScales[getIndexScale(weight)][0]

export const messageWeight = (weight, height, result) => {
    if (getIndexScale(result)==1)
        return 'Congratulations!'
    else if (getIndexScale(result)==0){
        return 'Your need to gain ' + (height/100 * height/100 * 18.5 - weight).toFixed(1) + ' Kg.'
    }
    else{
        return 'Your need to lose ' + (weight - height/100 * height/100 * 24.9).toFixed(1) + ' Kg.'
    }
}