const button=document.querySelector('.btn-start');
const container=document.querySelector('.container');

const months=24;
const openDoor=(path,event)=>{
    event.target.parentNode.style.backgroundImage=`url(${path})`;
    event.target.style.backgroundColor="#333";
    event.target.style.opacity=0;
}

const createCalender=()=>{
    console.log("test");

    for(let i=0; i<months; i++){
        const calenderDoor=document.createElement('div');
        calenderDoor.classList.add('img');
        calenderDoor.style.gridArea="door"+(i+1);
        container.appendChild(calenderDoor);

        const calenderDoorText=document.createElement('div');
        calenderDoorText.classList.add('text');
        calenderDoorText.innerHTML=i+1;
        calenderDoor.appendChild(calenderDoorText);

        let picNumber=i+1;
        let picPath=`./img/pic${picNumber}.jpg`;
        calenderDoorText.addEventListener('click', openDoor.bind(null,picPath));

    }
}

button.addEventListener('click', createCalender);