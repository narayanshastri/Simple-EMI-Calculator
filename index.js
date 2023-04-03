        function amountChange() {
            document.getElementById("txtAmount").value = document.getElementById("rangeAmount").value;
        }
        function yearChange() {
            document.getElementById("txtYears").value = document.getElementById("rangeYears").value;
        }
        function InterestChange() {
            document.getElementById("txtInterestRate").value = document.getElementById("rangeRate").value;
        }

        function calculateInstallment() {
            var p = parseInt(document.getElementById("txtAmount").value);
            var n = parseInt(document.getElementById("txtYears").value) * 12;
            var r = parseFloat(document.getElementById("txtInterestRate").value) / 12 / 1000;
            var EMI = Math.round((p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
            document.getElementById("Result").innerHTML = `Your Monthly EMI is going to be &#8377; <span class="text-primary">${EMI}/-</span> per month`;
        }
