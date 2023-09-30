
// How to create array 
let itemlist = ["Apple", "Orange", "Mango", "Banana", "Grapes"];
let citylist = new Array("Mumbai", "Bangalore", "Delhi", "Chennai", "Kolkata");

// structure of array
    /*
       arrayName[index] =>Element

       itemlist[0]=>Apple
       itemlist[0]=>Orange
       itemlist[0]=>Mango
       itemlist[0]=>Banana
       itemlist[0]=>Grapes
    */
   
       console.log( itemlist[0] );
       console.log( itemlist[4] );

       console.log("-------Using for Loop-------")
       for( let i=0; i<itemlist.length; i++){
        
        console.log(i,  itemlist[i] );
       }

       console.log("-------Using While Loop-------")
       let i=0;
       while(i<itemlist.length)
       {
        console.log(i, itemlist[i] );
        i++;
       }
























