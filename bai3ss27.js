let arr=[];
let choice;
let result;
do {
    console.log("1. Tính diện tích hình tròn.");
    console.log("2. Tính chu vi hình tròn.");
    console.log("3. Tính diện tích hình chữ nhật.");
    console.log("4. Tính chu vi hình chữ nhật.");
    console.log("5. Thoát");
    choice = +prompt("Nhập lựa chọn (1-5): ");
    switch(choice){
        case 1:
            let radius1 = +prompt("Nhập bán kính hình tròn: ");
                if (isNaN(radius1) || radius1 <= 0) {
                    console.log("Vui lòng nhập bán kính hợp lệ!");
                    break;
                }
                result= Math.PI*radius1*radius1;
                console.log(`Diện tích hình tròn là: ${result}`);
            break;
        case 2:
            let radius2 = parseFloat(prompt("Nhập bán kính hình tròn:"));
                if (isNaN(radius2) || radius2 <= 0) {
                    alert("Vui lòng nhập bán kính hợp lệ!");
                    break;
                }
                result= 2*Math.PI*radius2;
                console.log(`Chu vi hình tròn là: ${result}`);
            break;
        case 3:
            let length1 = +prompt("Nhập chiều dài hình chữ nhật:");
            let width1 = +prompt("Nhập chiều rộng hình chữ nhật:");
            if (isNaN(length1) || isNaN(width1) || length1 <= 0 || width1 <= 0) {
                alert("Vui lòng nhập kích thước hợp lệ!");
                break;
            }
            result= length1*width1;
            console.log(`Diện tích hình Chữ Nhật là: ${result}`);
            break;
        case 4:
            let length2 = +prompt("Nhập chiều dài hình chữ nhật:");
            let width2 = +prompt("Nhập chiều rộng hình chữ nhật:");
            if (isNaN(length2) || isNaN(width2) || length2 <= 0 || width2 <= 0) {
                alert("Vui lòng nhập kích thước hợp lệ!");
                break;
            }
            result= (length1+width1)*2;
            console.log(`Chu vi hình Chữ Nhật là: ${result}`);
            break;
        case 5:
            break;
        default:
            console.log ("Lựa chọn không hợp lệ!! vui lòng chọn lại từ 1-5");
    }
} while (choice !== 5);