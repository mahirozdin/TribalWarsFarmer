
(function() {
var manager = "";




var row_length = 0;
var i = 2;
var on = true;
$(window).blur(function(){
    on = false;
    console.log("STOP BOT");
    document.title = 'BOT STOPPED OPEN PAGE';
});
$(window).focus(function(){
    on=true;
    console.log("continue BOT");
    document.title = 'FARMING';
});



function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function randomDo(){




    setTimeout(function (){

        var light_count = document.getElementsByClassName("unit-item unit-item-light")[0].innerText*1;

        console.log(light_count);
        var plunder_list ='';
        plunder_list = document.getElementById('plunder_list');
        var row = plunder_list.rows[i]
        row_length = plunder_list.rows.length;
        console.log("Total Available Loot : "+row_length);
        console.log("Left : "+(row_length-i));
        if(row_length < 2 || (row_length-i) < 2 || light_count < 2){

            console.log("Wait for 150 seconds : ");
            setTimeout(myFunction, 150000);
        }else{
            console.log("Im on loot : "+i);



            var type = 1;
            //iterate through rows
            //rows would be accessed using the "row" variable assigned in the for loop
            for (var j = 0, col; col = row.cells[j]; j++) {
                //iterate through columns

                if(j == 2){

                    var image = col.innerHTML;

                    console.log(image);

                    //<img src="https://dstr.innogamescdn.com/asset/41eac3fa/graphic/max_loot/0.png" class=""

                    if(checkExistOrnot(image,"1.png")){

                        type=2 ;
                    }

                    console.log("type : "+type)
                }
                if(j == 8 && type == 1){
                    col.getElementsByTagName('*')[0].click();
                    console.log("A");
                }else if(j == 9 && type == 2 && light_count > 9){
                    col.getElementsByTagName('*')[0].click();
                    console.log("B");
                }

                // How long you want the delay to be, measured in milliseconds.

                //col.childeren[0].click();
            }

            i++;
        }
    }, randomIntFromInterval(1000, 3000));
}




setInterval(function (){
    if(on){
        randomDo();
    }else{


    }

}, 2000);

function myFunction(){

    window.location.reload();

}
var min = 65500,
    max = 135300;
var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10

setTimeout(myFunction, rand);




function checkExistOrnot(str1,str2)
{
    if (str1.indexOf(str2) >= 0)
        return true
    else
        return false
}


}.call(this));



