let i = 0

while( i <= 100){
   let afficher = false;
   
   if(i <= 50){
       if(i % 2 === 0){
           afficher = true;
       }
   } else {
       if((i - 51) % 3 === 0){
           afficher = true;
       }
   }
   
   if(afficher){
   if( i % 2 === 0){
       console.log(i + " est pair");
   } else {
       console.log( i + " est impair");
   }
}
i++;
}