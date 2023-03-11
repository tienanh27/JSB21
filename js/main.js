const dsnv = new DSnhanvien();
const validation = new Validation();

function getELE(id) {
    return document.getElementById(id);
}

function setLocalStorage(mang) {
    localStorage.setItem("DSnhanvien", JSON.stringify(mang));
}

function getLocalStorage() {
    if (localStorage.getItem("DSNV") != null) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        showTable(dsnv.mangNV);
    }
}
getLocalStorage();

function addNV() {

    var taiKhoan = getELE("tknv").value;
    var hoTen = getELE("name").value;
    var email = getELE("email").value;
    var matKhau = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luong = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;


    var isValid = true;

    isValid &= validation.checkEmpty(taiKhoan, "tbTKNV", "Tài khoản nhân viên không để trống!") && validation.checkID(taiKhoan, "tbTKNV", "Tài khoản không được trùng", dsnv.mangNV);
    isValid &= validation.checkEmpty(hoTen, "tbTen", "Tên không để trống!") && validation.checkName(hoTen, "tbTen", "Tên sinh viên chưa đúng định dạng!");
    isValid &= validation.checkEmpty(email, "tbEmail", "Email không được để trống!") && validation.checkEmail(email, "tbEmail", "Email chưa đúng định dạng!");
    isValid &= validation.checkEmpty(matKhau, "tbMatKhau", "Mật khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không để trống!") && validation.checkPass(matKhau, "tbMatKhau", "Mật khẩu chưa đúng định dạng!")
    isValid &= validation.checkEmpty(ngayLam, "tbNgay", "Ngày làm không được để trống!");
    isValid &= validation.checkSelect("chucvu", "tbChucVu", "Chức vụ chưa hợp lệ");
    isValid &= validation.checkEmpty(luong, "tbLuongCB", "Lương cơ bản phải lớn hơn 0");
    isValid &= validation.checkEmpty(gioLam, "tbGiolam", "Giờ làm không để trống!") && validation.checkgioLam(gioLam, "tbGioLam", "Giờ làm chưa hợp lệ!")


    if (isValid) {
        var nv = new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, Number(luong), chucVu, Number(gioLam));
        nv.tinhTongLuong();
        nv.xepLoaiNhanVien();
        dsnv.themNV(nv);
        showTable(dsnv.mangNV);
        setLocalStorage(dsnv.mangNV)
    }
}

function viewDetails(id) {
    var index = dsnv.findIndexNV(id);
    if (index != -1) {
        getELE("tknv").value = dsnv.mangNV[index].taiKhoan;
        getELE("tknv").disabled = true;
        getELE("name").value = dsnv.mangNV[index].hoTen;
        getELE("email").value = dsnv.mangNV[index].email;
        getELE("password").value = dsnv.mangNV[index].matKhau;
        getELE("datepicker").value = dsnv.mangNV[index].ngayLam;
        getELE("luongCB").value = dsnv.mangNV[index].luong;
        getELE("chucvu").value = dsnv.mangNV[index].chucVu;
        getELE("gioLam").value = dsnv.mangNV[index].gioLam;
    }
}


function updateNV() {
    var taiKhoan = getELE("tknv").value;
    var hoTen = getELE("name").value;
    var email = getELE("email").value;
    var matKhau = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luong = Number(getELE("luongCB").value);
    var chucVu = getELE("chucvu").value;
    var gioLam = Number(getELE("gioLam").value);
    var nv = new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, Number(luong), chucVu, Number(gioLam))
    nv.tinhTongLuong();
    nv.xepLoaiNhanVien();

    dsnv.updateNV(nv);

    setLocalStorage(dsnv.mangNV);
    getLocalStorage();
}

getELE("btnCapNhat").onclick = updateNV;

function deleteNV(id) {

    dsnv.deleteNV(id);

    setLocalStorage(dsnv.mangNV);
    getLocalStorage();
}

function hienthiTable(mang) {
    var content = "";
    mang.map(function (nv,index) {
        var trELE = `
        <tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.hoTen}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuong}</td>
        <td>${nv.xepLoai}</td>
        <td>
            <button type="submit" onclick="seenDetails('${nv.taiKhoan}')" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Xem</button>
            <button onclick="deleteNV('${nv.taiKhoan}')"  class="btn btn-danger">Xóa</button>
        </td>
        </tr>
        `;
        content += trELE;
    })
    getELE("tableDanhSach").innerHTML = content;
}

//  search text hiện kết quả
getELE("searchName").onkeyup = function(){
    var keyword = getELE("searchName").value;
    var mangKQ = dsnv.searchName(keyword);

    hienthiTable(mangKQ);
}
