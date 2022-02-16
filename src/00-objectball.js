function gameObject(){
   return  {
        'home': {
            'teamName': 'Brooklyn Nets',
            'colors':['Black', 'White'],
            'players': {
                'Alan Anderson':{
                    'number': 0,
                    'shoe': 16,
                    'points': 22,
                    'rebounds': 12,
                    'assists': 12,
                    'steals': 3,
                    'blocks':1,
                    'slamDunks':1
                },'Reggie Evans': {
                    'number': 30,
                    'shoe': 14,
                    'points': 12,
                    'rebounds': 12,
                    'assists': 12,
                    'steals': 12,
                    'blocks': 12,
                    'slamDunks': 7
                },'Brook Lopez':{
                    'number': 11,
                    'shoe': 17,
                    'points': 17,
                    'rebounds': 19,
                    'assists':10,
                    'steals':3,
                    'blocks':1,
                    'slamDunks':15
                },'Mason Plumlee':{
                    'number': 1,
                    'shoe': 19,
                    'points': 26,
                    'rebounds': 12,
                    'assists': 6,
                    'steals': 3,
                    'blocks': 8,
                    'slamDunks': 5
                },'Jason Terry':{
                    'number': 31,
                    'shoe': 15,
                    'points': 19,
                    'rebounds': 2,
                    'assists': 2,
                    'steals':4,
                    'blocks': 11,
                    'slamDunks': 1
                }
            } //end of players obj
        }, //end of home obj
        'away':{
            'teamName': 'Charolette Hornets',
            'colors':['Turquoise', 'Purple'],
            'players': {
                'Jeff Adrien':{
                    'number': 4,
                    'shoe': 18,
                    'points': 10,
                    'rebounds': 1,
                    'assists': 1,
                    'steals': 2, 
                    'blocks': 7,
                    'slamDunks': 2
                },'Bismak Biyombo': {
                    'number': 0,
                    'shoe': 16,
                    'points': 12,
                    'rebounds': 4,
                    'assists': 7,
                    'steals': 7,
                    'blocks': 15,
                    'slamDunks': 10
                },'DeSagna Diop':{
                    'number': 2,
                    'shoe': 14,
                    'points': 24,
                    'rebounds': 12,
                    'assists': 12,
                    'steals': 4,
                    'blocks': 5,
                    'slamDunks': 5
                },'Ben Gordon':{
                    'number': 8,
                    'shoe': 15,
                    'points': 33,
                    'rebounds': 3,
                    'assists': 2,
                    'steals': 1,
                    'blocks': 1,
                    'slamDunks': 0
                },'Brendan Haywod':{
                    'number': 33,
                    'shoe': 15,
                    'points': 6,
                    'rebounds': 12,
                    'assists': 12,
                    'steals': 22,
                    'blocks': 5,
                    'slamDunks': 12
                }
            } //end of players obj
        } //end of away obj
    } //end of obj
} //end of func

function numPointsScored(name){
    const objHome=Object.assign({}, gameObject().home)
    const objAway=Object.assign({}, gameObject().away)

    const players=Object.assign({},objHome.players,objAway.players)
return players[name].points
}

function shoeSize(name){
    const objHome=Object.assign({}, gameObject().home)
    const objAway=Object.assign({}, gameObject().away)

    const players=Object.assign({},objHome.players,objAway.players)
return players[name].shoe

}
//console.log(numPointsScored('Brendan Haywod'))
//console.log(shoeSize('Brendan Haywod'))

function teamColors(team){
    let colors
    if (team===gameObject().home.teamName){
        colors=gameObject().home.colors
    } else {
        colors=gameObject().away.colors
    }
    return colors
 }
//console.log(teamColors('Brooklyn Nets'))

function teamNames(){
    return [gameObject().home.teamName,gameObject().away.teamName]
}
//console.log(teamNames())

function playerNumbers(team){
    const homePlayers=gameObject().home.players
    const awayPlayers=gameObject().away.players
    let jerseys=[]
    if (team===gameObject().home.teamName){
        for (let name in homePlayers){
            jerseys.push(homePlayers[name].number)
        }
    } else 
        for (let name in awayPlayers){
       jerseys.push(awayPlayers[name].number)
    }
    return jerseys
}
//console.log(playerNumbers('Brooklyn Nets'))
//console.log(playerNumbers('Charolette Hornets'))

function playerStats(name){
    const objHome=Object.assign({}, gameObject().home)
    const objAway=Object.assign({}, gameObject().away)
    const players=Object.assign({},objHome.players,objAway.players)
return players[name]
}
//console.log(playerStats('Alan Anderson'))

function bigShoeRebounds(){
    const objHome=Object.assign({}, gameObject().home)
    const objAway=Object.assign({}, gameObject().away)
    const players=Object.assign({},objHome.players,objAway.players)
    let nameShoe={}
    for (let name in players){
        shoeSize=players[name].shoe
        nameShoe[name]=shoeSize
        
    }
    let shoeNumber=Object.values(nameShoe)
    //const shoeNumber=shoeString.map(element=>parseInt(element))
    const largestShoe=Math.max(...shoeNumber)
    console.log(nameShoe)
    console.log(shoeNumber)
    console.log(largestShoe)

    return Object.keys(nameShoe).find(key=> nameShoe[key]===largestShoe)
    
}

//console.log(bigShoeRebounds())