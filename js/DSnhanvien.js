function DSnhanvien() {
    this.mangNV = [];

    this.themNV = function (nv) {
            this.mangNV.push(nv);
    }

    this.findIndexNV = function (id) {
        var indexFind = -1; 
        indexFind = this.mangNV.findIndex(function (nv) {

            return nv.taiKhoan == id;
        })
        return indexFind;
    }
    
    this.updateNV = function (nv) {
        var index = this.findIndexNV(nv.taiKhoan);
        if (index != -1) {
            this.mangNV[index] = nv;
        }
    }
    this.deleteNV = function (id) {
        var index = this.findIndexNV(id);

        if (index != -1) {
            this.mangNV.splice(index,1);
            
        }
    }

}
DSnhanvien.prototype.searchName = function (keyword) {
    var mangKQ = [];
    var keywordLowerCase = keyword.toLowerCase();
    keywordLowerCase = keywordLowerCase.replace(/\s/g, "");

    console.log(keywordLowerCase);
    this.mangNV.map(function (nv) {
        var nameLowerCase = nv.hoTen.toLowerCase().replace(/\s/g, "");
        if (nameLowerCase.indexOf(keywordLowerCase) > -1) {
            mangKQ.push(nv);
        }
    });
    return mangKQ;
}