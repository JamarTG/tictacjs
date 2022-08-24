const squares = document.querySelectorAll('.square');
const marker = document.querySelector('.marker');
// decide who's turn it is
let isPlayersTurn : boolean = true;
let unchosenSquareNumbers : number[] = [1,2,3,4,5,6,7,8,9];
let chosenSquareIndex:number;
let chosenSquareNumber:number;
let chosenSquare;

let humanLetter:string = 'X';
let computerLetter:string = 'O'
let lastCharAsNumber:number;

let gameEnded:boolean = false;
let positionEvaluation:number;


const minmax = () => {



}
//make the values passed an optional parameter in the evaluation function


const random = (min:number, max:number) => Math.floor(Math.random() * (max - min)) + min;

const getSquareContent = (sqIdx:number) => document.getElementById(`square${sqIdx}`)?.textContent



const boardEvaluation = () =>{
    
    
    let arr = []
    for(let i = 1 ; i  <10 ; i++){
        arr.push(getSquareContent(i))
    }


    if(arr[0] === arr[1] && arr[1] === arr[2] && arr[2]  != ''){

        marker?.classList.add('marker-r1')
        marker?.classList.remove('marker')
        return  arr[0] === 'X' ?  -1  : 1
        
    }
    else if(arr[3] === arr[4] && arr[4] === arr[5] && arr[5] != ''){
        marker?.classList.add('marker-r2')
        marker?.classList.remove('marker')      
        return  arr[3] === 'X' ?  -1  : 1

    }
    else if(arr[6] === arr[7] && arr[7] === arr[8] && arr[8] != ''){
        marker?.classList.add('marker-r3')
        marker?.classList.remove('marker')
        return  arr[6] === 'X' ?  -1  : 1

    }

    else if(arr[0] === arr[3] && arr[3] === arr[6] && arr[6] != ''){
        marker?.classList.add('marker-c1')
        marker?.classList.remove('marker')          
        return  arr[0] === 'X' ?  -1  : 1   
    }
    else if(arr[1] === arr[4] && arr[4] === arr[7] && arr[7] != ''){
        marker?.classList.add('marker-c2')
        marker?.classList.remove('marker')      
        return  arr[1] === 'X' ?  -1  : 1
    }
    else if(arr[2] === arr[5] && arr[5] === arr[8] && arr[8] != ''){
        marker?.classList.add('marker-c3')
        marker?.classList.remove('marker')              
        return  arr[2] === 'X' ?  -1  : 1
    }

    else if(arr[0] === arr[4] && arr[4] === arr[8] && arr[8] != ''){
        marker?.classList.add('marker-d1')
        marker?.classList.remove('marker')
        return  arr[0] === 'X' ?  -1  : 1        
    }

    else if(arr[2] === arr[4] && arr[4] === arr[6] && arr[6]!= ''){
        marker?.classList.add('marker-d2')
        marker?.classList.remove('marker')
        console.log()
        return  arr[2] === 'X' ?  -1  : 1   
    }

    else if(arr[0] && arr[1] && arr[2] && arr[3] && arr[4] && arr[5] && arr[6] && arr[7] && arr[8]){
        return 0 
    }

    else{
        return 2
    }

}

for(let square of squares){
        
    square.addEventListener('click', () => {

            //TODO
            /*
                Ensure that human can't choose a square that is already taken
                Ensure that we computer stops playing if full

            */

            if(!gameEnded){

            lastCharAsNumber = parseInt(square.id.charAt(square.id.length-1))    
            
            if(!unchosenSquareNumbers.includes(lastCharAsNumber)){
                return
            }

            square.textContent = humanLetter
                    
            
            //remove that square number from the unchosen array
            unchosenSquareNumbers = unchosenSquareNumbers.filter(x => x != lastCharAsNumber)
            
            positionEvaluation  = boardEvaluation() 

            if(positionEvaluation === -1 || positionEvaluation === 1 || positionEvaluation === 0 ){
                gameEnded = true
            }    
        }
        if(!gameEnded){
            //choose an index in the unchosen square numbers
            chosenSquareIndex = random(0,unchosenSquareNumbers.length-1);
            chosenSquareNumber  = unchosenSquareNumbers[chosenSquareIndex]
            //chose the unchosen number using the random square index
            chosenSquare = document.querySelector(`#square${chosenSquareNumber}`)

            
            if(chosenSquare != null){
                chosenSquare.textContent = computerLetter;
            }

            unchosenSquareNumbers = unchosenSquareNumbers.filter(x => x != chosenSquareNumber)                        

            positionEvaluation  = boardEvaluation() 
            
            if(positionEvaluation === -1 || positionEvaluation === 1 || positionEvaluation === 0 ){
                gameEnded = true
            }
        
        }
            
        });
}