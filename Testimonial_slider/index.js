const testimonial=[
    {
        name:"predo el jamal",
        photourl:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text:"I have been a loyal customer of apple.com for many years now, and I have always been impressed with their products. However, my recent experience with the i phone 15 pro max left me disappointed. The features were not up to par and I had a bad overall experience. Despite this, I must say that apple.com's customer service team went above and beyond to rectify the situation. They were attentive, understanding, and worked tirelessly to find a solution that worked for me. This level of dedication and commitment to their customers is what sets apple.com apart from other companies. I am confident that they will continue to improve and provide top-notch products and services. Thank you, apple.com, for always putting your customers first. I will continue to be a loyal customer and recommend your brand to others."
    },
    {
        name:"Justin",
        photourl:"https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text:"I recently had the pleasure of using Maritime Travellers for my trip and I must say, it was a fantastic experience. From the moment I booked my trip with them, I knew I was in good hands.The team at Maritime Travellers, especially Appong List, were extremely helpful and accommodating. They made sure all my travel arrangements were taken care of and went above and beyond to ensure I had a smooth and enjoyable trip.The overall experience was simply amazing. The staff were friendly and professional, the accommodations were top-notch, and the itinerary was well-planned. I couldnt have asked for a better travel experience.I highly recommend Maritime Travellers to anyone looking for a stress-free and enjoyable trip. Thank you, Appong List and the team, for providing me with such a wonderful experience. I will definitely be using your services again in the future. "
    },
    {
        name:"Amir khan",
        photourl:"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text:" Really good experience."
    }
];

const imgEl = document.querySelector(".user-image")
const nameEl = document.querySelector(".user-name")
const textEl = document.querySelector(".text")

let idx = 0;

updatetestimonials();

function updatetestimonials(){
    const {name,photourl,text} = testimonial[idx];

    imgEl.src = photourl;
    nameEl.innerText = name;
    textEl. innerText = text;
    idx++;
    if(idx === testimonial.length){
        idx=0;
    }

    setTimeout(()=>{
        updatetestimonials()
    },10000)

}