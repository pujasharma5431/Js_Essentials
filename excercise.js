
// Use JavaScript to create a game of snake water and  gun. The game should ask you to enter S,W or G. The computer should be able to randomly generate ,W or G and declear win or loss using alert. Use confirm and promt wherever required.



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 0= SNAKE
// 1= WATER
// 2=GUN
let generated_option = getRandomInt(0, 2)

const game=((a,b)=>{
    if(a=='S' && b==0){
        alert("Computer choose a snake")
        alert('It is a draw')
    }
    else if(a=="S" && b=='1') 
    {
        alert("Computer choose a water")
        alert('You won')
    }


    else if(a=='S' && b=='2')

    {
        alert("Computer choose a Gun")
        alert('You lose')
    }

    else if(a=='W'&& b==0){
        alert("Computer choose Snake")
        alert("You lose")

    }
    else if(a=='W' && b==1){
        alert("Computer choose water")
        alert("Its is a draw")
    }
    else if(a=='W' && b==2){
        alert("computer choose Gun")
        alert("You won")
    }

    else if(a=='G' && b==0){
        alert("Computer choose Snake")
        alert("You won")
    }
    else if(a=='G'&& b==1){
        alert("Computer choose water")
        alert("You lose")
    }
    else if(a=='G' && b==2){
        alert("Computer choose gun")
        alert("It is draw")
    }
    else{
        alert("Enter valid option")
    }

})
const enter=prompt("Enter any S, W, G")
game(a,generated_option)


 