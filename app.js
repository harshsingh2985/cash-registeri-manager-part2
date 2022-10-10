const billamount=document.querySelector("#bill-Amount");

const cashgiven=document.querySelector("#Cash-Given");

const button=document.querySelector(".submitbtn");

const message=document.querySelector("#errormessage");

const notesavaible=[2000,500,100,20,10,5,1];

const noofnotes=document.querySelectorAll(".no-of-notes");

button.addEventListener("click",function validate(){
    hidemessage();
    if(Number(billamount.value)>0){

        if(Number(cashgiven.value)>=Number(billamount.value)){
            hidemessage();

            const amountToretuned=cashgiven.value-billamount.value;
            calculatechange(amountToretuned);

        }
        else{
            showmessage("The Cash Amount Should Be Greater than the Bill Amount")
        }
            
    }
    else if(cashgiven.value===billamount.value){
        showmessage("The Bill is Already paid")
    }

    else{
        showmessage("please enter the valid amount")

    }

});

function calculatechange(amountToretuned){
    for(let i=0;i<notesavaible.length;i++){
        const NumberOFNOTES=Math.trunc(amountToretuned/notesavaible[i]);
        amountToretuned=amountToretuned %notesavaible[i];
        noofnotes[i].innerText=NumberOFNOTES;
    }


}
function showmessage(msg){
    message.style.display="block";
    message.innerText=msg;

}
function hidemessage(){
    message.style.display="none";

}
