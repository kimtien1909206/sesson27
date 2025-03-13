let integerNumber = [];
let choice;
do {
 console.log("1. Nhập danh sách số nguyên")
 console.log("2. Tính trung bình các số")
 console.log("3. Tìm số chẵn lớn nhất")
 console.log("4. Tìm số lẻ nhỏ nhất")
 console.log("5. Thoát")
choice = +prompt("Nhập lựa chọn (1-5): ");
    switch (choice) {
      case "1":
        const n = +prompt("Nhập số lượng số nguyên:");
        for (let i = 0; i < n; i++) {
          const a = +prompt(`Nhập số nguyên thứ ${i + 1}:`);
          integerNumber.push(a);
        }
        break;
      case "2":
        if (integerNumber.length === 0) {
          alert("Danh sách rỗng.");
        } else {
          const sum = integerNumber.reduce((a, b) => a + b, 0);
          const trungBinh = sum / integerNumber.length;
          alert(`Trung bình các số: ${trungBinh}`);
        }
        break;
      case "3":
        let soChanLonNhat = null;
        for (let i = 0; i < integerNumber.length; i++) {
          if (so % 2 === 0) {
            if (soChanLonNhat === null || so > soChanLonNhat) {
              soChanLonNhat = so;
            }
          }
        }
        if (soChanLonNhat !== null) {
          alert(`Số chẵn lớn nhất: ${soChanLonNhat}`);
        } else {
          alert("Không có số chẵn trong danh sách.");
        }
        break;
      case "4":
        let soLeNhoNhat = null;
        for (let i = 0; i < integerNumber.length; i++) {
          if (so % 2 !== 0) {
            if (soLeNhoNhat === null || so < soLeNhoNhat) {
              soLeNhoNhat = so;
            }
          }
        }
        if (soLeNhoNhat !== null) {
          alert(`Số lẻ nhỏ nhất: ${soLeNhoNhat}`);
        } else {
          alert("Không có số lẻ trong danh sách.");
        }
        break;
      case "5":
       break;
      default:
        alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
    } while (choice !== 5);