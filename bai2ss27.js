let students=[];
let choice;
do {
    console.log("1. Nhập danh sách sinh viên.");
    console.log("2. Hiển thị danh sách sinh viên.");
    console.log("3. Tìm sinh viên theo tên.");
    console.log("4. Xóa sinh viên khỏi danh sách.");
    console.log("5. Thoát");
    choice = +prompt("Nhập lựa chọn (1-5): ");
    switch(choice){
        case 1:
            let count = +prompt("Nhập số lượng sinh viên:");
            for (let i = 0; i < count; i++) {
                let name = prompt(`Nhập tên sinh viên thứ ${i + 1}:`);
                students.push(name);
            }
            console.log("Nhập danh sách sinh viên thành công!");
            break;
        case 2:
            if (students.length === 0) {
                console.log("Danh sách sinh viên trống!");
            } else {
                console.log("Danh sách sinh viên:\n" + students.join("\n"));
            }
            break;
        case 3:
            let searchName = prompt("Nhập tên sinh viên cần tìm:");
            let found = students.includes(searchName);
            if (found) {
                console.log(`Tìm thấy sinh viên: ${searchName}`);
            } else {
                console.log("Sinh viên không có trong danh sách!");
            }
            break;
        case 4:
            let deleteName = prompt("Nhập tên sinh viên cần xóa:");
            let index = students.indexOf(deleteName);
            if (index !== -1) {
                students.splice(index, 1);
               console.log(`Đã xóa sinh viên: ${deleteName}`);
            } else {
                console.log("Sinh viên không có trong danh sách!");
            }
            break;
        case 5:
            break;
        default:
            console.log ("Lựa chọn không hợp lệ!! vui lòng chọn lại từ 1-5");
    }
} while (choice !== 5);