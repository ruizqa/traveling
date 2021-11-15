let tigger = {character: 'Tigger'}
let pooh = {character:'Winnie the Pooh'}
let piglet = {character:'Piglet'}
let owl = {character:'Owl'}
let cRobin = {character:'Christopher Robin'}
let rabbit = {character: 'Rabbit'}
let gopher = {character: 'Gopher'}
let bees = {character:'Bees'}
let konga ={character: 'Konga'}
let eeyore = {character:'Eeyore'}
let heffalumps ={character:'Heffalumps'}

tigger['north'] = pooh
pooh['south'] = tigger
piglet['east']=pooh
pooh['west']=piglet
owl['south']=piglet
piglet['north']=owl
owl['east']=cRobin
cRobin['north']=konga
konga['south']=cRobin
cRobin['east']=rabbit
rabbit['west']=cRobin
cRobin['south']=pooh
pooh['north']=cRobin
bees['west']=pooh
pooh['east']=bees
bees['north']=rabbit
rabbit['south']=bees
rabbit['east']=gopher
gopher['west']=rabbit
cRobin['north']=konga
konga['south']=cRobin
konga['north']=eeyore
eeyore['south']=konga
eeyore['east']=heffalumps
heffalumps['west']=eeyore

let player={location:tigger}

function move(direction){
    if(direction in player.location){
    player.location = player.location[direction]
    console.log(`You are now at ${player.location.character}'s house`);
    }
    else{
        console.log("You may not go that way");
    }

}