let arr=[];
let choice;
let result;
do {
    console.log("1. Cộng hai số");
    console.log("2. Trừ hai số");
    console.log("3. Nhân hai số");
    console.log("4. Chia hai số");
    console.log("5. Thoát");
    choice = +prompt("Nhập lựa chọn (1-5): ");
    let num1 = +prompt("Nhập vào số thứ nhất: ");
    let num2 = +prompt("Nhập vào số thứ hai: ");
    switch(choice){
        case 1:
        result = num1 + num2;
        console.log(`Kết quả: ${num1}+${num2}=${result}`);
        break;
        case 2:
        result = num1 - num2;
        console.log(`Kết quả: ${num1}-${num2}=${result}`);
        break;
        case 3:
            result = num1*num2;
            console.log(`Kết quả: ${num1}*${num2}=${result}`);
            break;
        case 4:
            if (num2 === 0) {
                    alert("Không thể chia cho 0!");
                } else {
                    result = num1 / num2;
                    alert(`Kết quả: ${num1} ÷ ${num2} = ${result}`);
                }
            break;
        case 5:
            break;
        default :
        console.log ("Lựa chọn không hợp lệ!! vui lòng chọn lại từ 1-5");
    }
} while (choice !== 5);