function nhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luong, chucVu, gioLam, loaiNhanVien) {
    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen;
    this.email= email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luong = luong;
    this.chucVu = chucVu;
    this.gioLamTrongThang = gioLam;
    this.tongLuong = 0;
    this.loaiNhanVien = loaiNhanVien

    this.tinhTongLuong = function (){
        if (this.chucVu == "Sếp") {
            this.tongLuong = this.luong * 3;
        }else if(this.chucVu == "Trưởng phòng") {
            this.tongLuong = this.luong * 2;
        }else if(this.chucVu == "Nhân Viên"){
            this.tongLuong = this.luong * 1;
        }
    } 
    this.xepLoaiNhanVien = function() {
        if(this.gioLam >= 192){
            return this.xepLoai = "Xuất sắc";
        }else if (this.gioLam >= 176){
            return this.xepLoai = "Giỏi";
        }else if (this.gioLam >= 160) {
            return this.xepLoai = "Khá";
        }else{
            return this.xepLoai = "trung bình";
        }
    }
}