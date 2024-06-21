

function delay(ms){
    // timeout = 1+6*Math.random()
    return new Promise(resolve => setTimeout(resolve,ms));
};

async function dotswithtext(element,basetext){
    let dots=''

    const endtime = Date.now() +10000;

    while(Date.now()<endtime){
        element.textContent=`${basetext}${dots}`

        dots = dots.length <3 ? dots + '.':'';
        await delay(500)
    }
    element.textContent=basetext;
}


async function alltext(){
    const paras = document.querySelectorAll('.hack p')

    paras.forEach(para => para.style.display= 'none')

    for (let para of paras) {
        const basetext = para.textContent

        para.style.display= 'block'

        await dotswithtext(para,basetext)

        para.style.display= 'none'
    }
}

alltext()