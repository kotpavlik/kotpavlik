import { useLottie } from 'lottie-react';
import groovyWalkAnimation from './NullAvatarLottie.json'
import React from 'react';


const style = { 
    overflow: 'hidden',
    borderRadius: 100,
    width: 290,
    height: 310,
    margin: -100,
    


    
};
const AvatarLottie = () => {
    const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
    }
    const { View } = useLottie(options, style);

    return View;
}

export default AvatarLottie ;