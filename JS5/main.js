// Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false
// Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra

// Ví dụ:

// checkStringExist("i love you", "you") => true
// checkStringExist("i love you", "hate") => false
function checkStringExist(a, b) {
    let isTrue = a.indexOf(b)
    if (isTrue > -1) {
        return true
    } else {
        return false
    }
}
console.log(checkStringExist("i love you", "hate")
)
// Bài 2. Viết function truyền vào 1 chuỗi, hãy rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. Nếu chuỗi có độ dài <= 8 ký tự thì giữ nguyên

// Ví dụ:

// shortenString("Xin chào các bạn") => "Xin chào..."
// shortenString("hello') => "hello"
function subString(a) {
    if (a.length > 8) {
        let a1 = a.substring(0,8) + "...";
        return a1
    }  

}
console.log(subString('xinchaotatcacacsbansafsfdgregsstrh'))
// Bài 3. Viết function truyền vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false.

// Ví dụ

// "Race car" => true,
// "hello world" => false.
function doixung(string) {
    let string1 = ''
    let stringNoSpace = string.replace(/\s/g, '').toLowerCase()
    for (let i = 0; i < stringNoSpace.length; i++) {
        string1 = stringNoSpace[i] + string1
    }
    if (stringNoSpace === string1) {
        return true
    }
    return false
}

console.log(doixung('Race car'));
// Bài 4: Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).

// Ví dụ

// 53751 -> 13557
// 14350 -> 10345
// 203950 -> 200359


// Bài 5: Viết function truyền vào 1 chuỗi bất kỳ gồm nhiều từ. Hãy chuyển chuỗi đó thành dạng snake_case và viết thường

// Ví dụ:

// "HELLO world" => "hello_world"
// "Xin Chào Các BẠN" => "xin_chào_các_bạn"
function chuyendoi(string) {
    let string1 = string.replace(/\s/g, '_')

    return string1.toLowerCase()
}

console.log(chuyendoi('MAriA OzAWA XiNH ĐẸP'))
