;(function(w) {
    w.addEventListener("load", alertLooper);

    function alertLooper() {
        for(var i = 1; !isOddPfctNum(i); i++) {
            w.alert(`Sorry, ${i} is not odd perfect number, and maybe I'll get arrested!`);
        }
        w.alert(`Oh, ${i} is an odd perfect number, and maybe I'll get glorious achievement!`);
    }


    function isOddPfctNum(n) {
        if(isOdd(n) && isPfctNum(n)) {
            return true;
        } else {
            return false;
        }
    }

    function isOdd(n) {
        if(n%2 == 1) {
            return true;
        } else {
            return false;
        }
    }

    function isPfctNum(n) {
        var sum = 0;
        for(var i = 1; i <= n/2; i++) {
            if(n%i == 0) {
                sum += i;
            }
        }

        if(sum == n) {
            return true;
        } else {
            return false;
        }
    }

})(window);
