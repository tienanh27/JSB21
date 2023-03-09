function Validation() {
    this.checkEmpty = function (valueInput, spanID, message) {
        if (valueInput == "") {
            document.getElementById(spanID).style.display = "block";
            document.getElementById(spanID).innerHTML = message;
            return false
        }

        document.getElementById(spanID).style.display = "none";
        document.getElementById(spanID).innerHTML = "";
        return true
    }

    this.checkID = function (valueInput, spanID, message, mangNV) {
        var isExist = false;

        isExist = mangNV.some(function (nv) {
            return valueInput === nv.taiKhoan;
        });

        if (isExist) {
            document.getElementById(spanID).style.display = "block";
            document.getElementById(spanID).innerHTML = message;
            return false

        } else {
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }

    }

    this.checkName = function (valueInput, spanID, message) {
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/
        if (valueInput.match(pattern)) {
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }
        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false
    }
    
    this.checkEmail = function (valueInput, spanID, message) {
        var patternString = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (valueInput.match(patternString)) {
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }


        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false
    }

    this.checkPass = function (valueInput, spanID, message) {
        var pattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;

        if (valueInput.match(pattern)) {
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }

        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false

    }

    this.checkSelect = function (selectID, spanID, message) {
        var indexOption = document.getElementById(selectID).selectedIndex;
        if (indexOption !== 0) {
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }
        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false

    }
    
    this.checkLuong = function (valueInput, spanID, message) {
        var pattern = /^\d+/;
        if (valueInput.match(pattern) && valueInput > 0) {
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }

        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false


    }

    this.checkgioLam = function (valueInput, spanID, message) {
        var pattern = /^\d+/;
        if (valueInput.match(pattern) && valueInput > 0) {
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }

        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false


    }

}