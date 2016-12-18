new Vue({
    el: '#todo',
    data: {
        firstSelected: '',
        types: [{
            text: 'A',
            checked: false
        }, {
            text: 'B',
            checked: false
        }, {
            text: 'O',
            checked: false
        }, {
            text: 'AB',
            checked: false
        }],
        secondSelected: '',
        pers: [{
            text: '0%',
            checked: false
        }, {
            text: '10%',
            checked: false
        }, {
            text: '20%',
            checked: false
        }, {
            text: '30%',
            checked: false
        }, {
            text: '40%',
            checked: false
        }, {
            text: '50%',
            checked: false
        }, {
            text: '60%',
            checked: false
        }, {
            text: '70%',
            checked: false
        }, {
            text: '80%',
            checked: false
        }, {
            text: '90%',
            checked: false
        }, {
            text: '100%',
            checked: false
        }],
        optionList: [],
        currentTotal: 0
    },
    watch: {
        secondSelected: function() {
            var listLength = this.optionList.length;
            var total = 0;

            for (var i = 0; i < listLength; i++) {
                var currentNumber = this.optionList[i].number;
                var floatNum = parseFloat(currentNumber) / 100;
                total += floatNum;
            }
            this.currentTotal = total;
        }
    },
    methods: {
        addList: function() {
            var first = this.firstSelected;
            var second = this.secondSelected || 0;
            var removeFromBloodList = this.types.findIndex(function(x) {
                return x.text == first
            });
            var selectedPer = parseFloat(second) / 100;
            var currentTotalPer = this.currentTotal;
            var finalTotal = selectedPer + currentTotalPer;

            if (finalTotal <= 1) {
                if (first && second) {
                    this.optionList.push({
                        type: first,
                        number: second
                    });
                    this.types[removeFromBloodList].checked = true;
                    this.firstSelected = "";
                    this.secondSelected = "";
                } else {
                    alert("please enter your data");
                }
            } else {
                alert("The total percentage cannot exceed 100%");
            }
        },
        removeList: function(option) {
            var optionIndex = this.optionList.indexOf(option);
            this.optionList.splice(optionIndex, 1);

            var resetOptionIndex = this.types.findIndex(function(x) {
                return x.text == option.type
            });
            this.types[resetOptionIndex].checked = false;

            var optionPercentage = parseFloat(option.number) / 100;
            var currentTotal = this.currentTotal;

            this.currentTotal = currentTotal - optionPercentage;
        }
    }
});
