// 实现一个add方法有如下效果add(1,2).add(3).add(4).ouput()，在output的时候输出前边数的和

// 1.利用class实现
class Adder {
    constructor() {
        this.total = 0;
    }

    add(...args) {
        args.forEach(num => {
            this.total += num;
        });
        return this;
    }

    output() {
        console.log("Sum of all added numbers:", this.total);
    }
}

// 测试
const addChain = new Adder();
addChain.add(1, 2).add(3).add(4).output();

// 2.利用原型链实现
function Adder2() {
    this.total = 0;
}

Adder2.prototype.add = function(...args) {
    args.forEach(num => {
        this.total += num;
    });
    return this;
};

Adder2.prototype.output = function() {
    console.log("Sum of all added numbers:", this.total);
};

// 测试
const addChain2 = new Adder2();
addChain2.add(1, 2).add(3).add(4).output();


