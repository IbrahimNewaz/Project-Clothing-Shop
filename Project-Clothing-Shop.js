console.log("\n");
"use strict";
const prosyn = require("prompt-sync");
const prompt = prosyn();

// 1st Function //
// ※This function is responsible for checking the discount※ //

function diSandtToTal(checkTotalBill)
{
    if(checkTotalBill >= 3000 && checkTotalBill <=5999)
    {
        console.log("Congratulation you won our \"Grand Opening 15 % Discount\" ");
        return 1;
    }
    else if(checkTotalBill >= 6000)
    {
        console.log("Congratulation you won our \"Grand Opening 25 % Discount\" ");
        return 2;
    }
    else
    {
        console.log("Thank you for your inquiry.");
        console.log("Unfortunately, your purchase did not meet the");
        console.log("specific criteria required to qualify for the discount.")
        return 0;
    }
}

// JS Main Function //
console.log("Offer !!! Offer !! >>>> 15% and 25 % <<<< Discount");
console.log("We are pleased to offer our valued customers Grand Opening Discounts of 15% and 25%, subject to certain conditions.");
console.log("\n");
let attempts = 0;
let MaxAttempts = 3;
let coRRect = false;

const yourNaMe = prompt("Please Entet Your Full Name >>> ").toLocaleUpperCase();

// ⁜⁜⁜---Maximum Attempts For Total Bill is 3 times---⁜⁜⁜//
while(attempts < MaxAttempts)
{
    let checkTotalBill = parseFloat(prompt("Your Total Bill >>>  "));
    attempts++
    if(checkTotalBill >= 0 && checkTotalBill <= 250)
    {
        console.log("There seems to be an issue with the total bill amount you entered.");
        console.log("Could you please review and try again?");
        console.log("___________________________________________________________________");
        if(attempts === 3)
        {
            console.log("_____________________________________________________________________");
            console.log("<<< 400 \" BAD REQUEST \" >>>|||<<< 503 \" Service UnAvailable \" >>>");
            console.log("_____________________________________________________________________");
        }
    }
    else
    {
        let granDTotal = diSandtToTal(checkTotalBill); // Calling Function //
        // ---⁜⁜⁜---Counting Total Net Bill and Showing ---⁜⁜⁜--- //
        if(granDTotal === 1)
        {
            let DisCount15 = (checkTotalBill / 100)*15;
            let PaYTotal15 = checkTotalBill - DisCount15 ;
            console.log("Dear " + yourNaMe + " Pleae Pay Total >>> " + PaYTotal15.toFixed(2) + " <<< Taka.");
            console.log("Kindly advise us of your preferred method of payment");
            let payMent = prompt("What form of payment will you be using today: card, mobile banking, or cash?>>> ").toUpperCase()
            if(payMent === "CARD")
            {
                console.log("______________________________________________________________");
                console.log("Please Enter Your Valid VISA , Master Card Or Bank Debit Card ");
                const cardNumber = parseInt(prompt("Card << "));
                console.log("Dear " + yourNaMe + " We Recived Taka >>> " + PaYTotal15.toFixed(2) + " <<< From Card No: " + cardNumber + " Thank You");
            }
            else if(payMent === "CASH")
            {
                console.log("_____________________________________________________________________________________________");
                console.log(yourNaMe+ " Please remit your payment " + PaYTotal15.toFixed(2) + " at the counter. Thank you.");
            }
            else
            {
                console.log("____________________________________________________________________");
                console.log("Dear " + yourNaMe + "\nWe sincerely apologize for any inconvenience.");
                console.log("Due to current technical issues.....,");
                console.log("BKash mobile banking is the only payment method available at this time.");
                console.log("Your Total Bill is >>> " + PaYTotal15.toFixed(2) + " <<< BDT")
                console.log("Please use the following cell phone number +880 1749 070 543 for BKash Payment");
                console.log("Alternatively, you may scan our BKash QR code for payment.");
            }
        }
        else if(granDTotal === 2)
        {
            let DisCount25 = (checkTotalBill / 100)*25;
            let PaYTotal25 = checkTotalBill - DisCount25;
            console.log("Dear " + yourNaMe + " Pleae Pay Total >>> " + PaYTotal25.toFixed(2) + " <<< Taka.");
            console.log("Kindly advise us of your preferred method of payment");
            let payMent = prompt("What form of payment will you be using today: card, mobile banking, or cash?>>> ").toUpperCase()
            if(payMent === "CARD")
            {
                console.log("______________________________________________________________");
                console.log("Please Enter Your Valid VISA , Master Card Or Bank Debit Card ");
                const cardNumber = parseInt(prompt("Card << "));
                console.log("Dear " + yourNaMe + " We Recived Taka >>> " + PaYTotal25.toFixed(2) + " <<< From Card No: " + cardNumber + " Thank You");
            }
            else if(payMent === "CASH")
            {
                console.log("_____________________________________________________________________________________________");
                console.log(yourNaMe+ " Please remit your payment " + PaYTotal25.toFixed(2) + " at the counter. Thank you.");
            }
            else
            {
                console.log("____________________________________________________________________");
                console.log("Dear " + yourNaMe + "\nWe sincerely apologize for any inconvenience.");
                console.log("Due to current technical issues.....,");
                console.log("BKash mobile banking is the only payment method available at this time.");
                console.log("Your Total Bill is >>> " + PaYTotal25.toFixed(2) + " <<< BDT")
                console.log("Please use the following cell phone number +880 1749 070 543 for BKash Payment");
                console.log("Alternatively, you may scan our BKash QR code for payment.");
            }
        }
        else if(granDTotal === 0)
        {
            console.log("Dear " + yourNaMe + " Please Pay Total >>> " + checkTotalBill.toFixed(2) + " <<< Taka.");
            console.log("Kindly advise us of your preferred method of payment");
            let payMent = prompt("What form of payment will you be using today: card, mobile banking, or cash?>>> ").toUpperCase()
            if(payMent === "CARD")
            {
                console.log("______________________________________________________________");
                console.log("Please Enter Your Valid VISA , Master Card Or Bank Debit Card ");
                const cardNumber = parseInt(prompt("Card << "));
                console.log("Dear " + yourNaMe + " We Recived Taka >>> " + checkTotalBill.toFixed(2) + " <<< From Card No: " + cardNumber + " Thank You");
            }
            else if(payMent === "CASH")
            {
                console.log("_________________________________________________________________________________________________");
                console.log(yourNaMe+ " Please remit your payment " + checkTotalBill.toFixed(2) + " at the counter. Thank you.");
            }
            else
            {
                console.log("____________________________________________________________________");
                console.log("Dear " + yourNaMe + "\nWe sincerely apologize for any inconvenience.");
                console.log("Due to current technical issues.....,");
                console.log("BKash mobile banking is the only payment method available at this time.");
                console.log("Your Total Bill is >>> " + checkTotalBill.toFixed(2) + " <<< BDT")
                console.log("Please use the following cell phone number +880 1749 070 543 for BKash Payment");
                console.log("Alternatively, you may scan our BKash QR code for payment.");
            }
        }
        break;
    }
}
console.log("\n");
