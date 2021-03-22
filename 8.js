/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  class Automaton {
    //构造函数
    constructor() {
      this.state = "start";
      this.sign = 1;
      this.answer = 0;
      //[执行阶段, [空格, 正负, 数值, 其他]]
      this.map = new Map([
        ["start", ["start", "signed", "in_number", "end"]],
        ["signed", ["end", "end", "in_number", "end"]],
        ["in_number", ["end", "end", "in_number", "end"]],
        ["end", ["end", "end", "end", "end"]],
      ]);
    }
    //获取当前索引
    getState(char) {
      if (char === " ") {
        // 空格判断
        return 0;
      } else if (char === "-" || char === "+") {
        // 正负判断
        return 1;
      } else if (typeof Number(char) === "number" && !isNaN(char)) {
        // 数值判断
        return 2;
      } else {
        // 其他情况
        return 3;
      }
    }
    change(char) {
      this.state = this.map.get(this.state)[this.getState(char)];
      if (this.state === "in_number") {
        this.answer = this.answer * 10 + (char - 0); //char-0是为了将char转换成整型
        this.answer = this.sign     === 1 ? Math.min(this.answer, Math.pow(2, 31) - 1) : Math.min(this.answer, -Math.pow(-2, 31));
      } else if (this.state === "signed") {
        this.sign = char === "+" ? 1 : -1;
      }
    }
  }

  let automaton = new Automaton();
  for (let char of str) {
      automaton.change(char);
  }
  return automaton.sign * automaton.answer;
};
console.log(myAtoi('  452'));