const description = [
    { title: 'Your First HTML Website | Sigma Web Development Course - Tutorial #2', cname: 'Codewithharry', veiws: 1432114, monthsold: '01-01-2024', duration: '15:40', thumbnail: 'https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLAFYHfOMfQL9bJ3HkTc17S1NLZKbg' },
    { title: 'Your First HTML Website | Sigma Web Development Course - Tutorial #2', cname: 'Codewithharry', veiws: 1432114, monthsold: '12-04-2022', duration: '15:40', thumbnail: 'https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLAFYHfOMfQL9bJ3HkTc17S1NLZKbg' },
    { title: 'Your First HTML Website | Sigma Web Development Course - Tutorial #2', cname: 'Codewithharry', veiws: 143211444556, monthsold: '12-04-2024', duration: '15:40', thumbnail: 'https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLAFYHfOMfQL9bJ3HkTc17S1NLZKbg' },
]

// title,cname,veiws,monthsold,duration,thumbnail

function dateformat(datestr){
    const parts=datestr.split('-');
    const year=parseInt(parts[2],10);
    const month=parseInt(parts[1],10)-1;
    const day=parseInt(parts[0],10);

    const givendate= new Date(year,month,day)

    const currentdate=new Date()

    const diffyear = currentdate.getFullYear() - givendate.getFullYear();

    if (diffyear===1){
        return '1 year ago';
    }else if(diffyear>1){
        return `${diffyear} year ago`;
    }else{
        const diffmonth = (currentdate.getFullYear() - givendate.getFullYear()) * 12 + (currentdate.getMonth() - givendate.getMonth());
        if (diffmonth === 0 && diffyear===0) {
            return 'today';
        } else if (diffmonth === 1) {
            return '1 month ago';
        } else {
            return `${diffmonth} months ago`;
        }
    }
}

function convertnum(num){
    if(num>=1000000000){
        return (num/1000000000).toFixed(1).replace(/\.0$/,'') + "B";
    }else if (num>=1000000){
        return (num/1000000).toFixed(1).replace(/\.0$/,'') + "M";
    }else if (num>=1000){
        return (num/1000).toFixed(1).replace(/\.0$/,'') + "K";
    }else{
        return num.tostring()
    }
}

function createcard(title,cname,veiws,monthsold,duration,thumbnail) {

    const body = document.body;

    const section = document.createElement('section');
    section.className = 'card';

    body.appendChild(section)

    const containerdiv = document.createElement('div');
    containerdiv.className = 'container';

    section.appendChild(containerdiv);


    const boxdiv = document.createElement('div');
    boxdiv.className = 'box';

    containerdiv.appendChild(boxdiv);

    const img = document.createElement('img');
    img.className = 'picture';
    img.src = thumbnail

    const durationdiv = document.createElement('div');
    durationdiv.className = 'duration';
    durationdiv.textContent = duration;

    boxdiv.appendChild(img);
    boxdiv.appendChild(durationdiv);

    const texteldiv = document.createElement('div');
    texteldiv.className = 'textel';

    containerdiv.appendChild(texteldiv);

    const titleblockdiv = document.createElement('div');
    titleblockdiv.className = 'title-block';
    titleblockdiv.textContent = title;


    const elementsdowndiv = document.createElement('div')
    elementsdowndiv.className = 'elementsdown'

    texteldiv.appendChild(titleblockdiv);
    texteldiv.appendChild(elementsdowndiv);

    const span1 = document.createElement('span');
    span1.textContent = cname;
    const span2 = document.createElement('span');
    span2.textContent = convertnum(veiws);
    const span3 = document.createElement('span');
    span3.textContent = dateformat(monthsold);

    elementsdowndiv.appendChild(span1);
    elementsdowndiv.appendChild(span2);
    elementsdowndiv.appendChild(span3);

    const svgtempDiv = document.createElement('div');
    svgtempDiv.className = 'svgtemp';
    svgtempDiv.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
        </svg>
    `;

    const seperationdiv = document.createElement('div');
    seperationdiv.className = 'seperation';

    containerdiv.appendChild(svgtempDiv);
    section.appendChild(seperationdiv);

}

description.forEach(desc => {
    createcard(desc.title,desc.cname,desc.veiws,desc.monthsold,desc.duration,desc.thumbnail);
});