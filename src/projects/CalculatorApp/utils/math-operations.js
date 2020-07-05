
const rank = (c) => {
  switch (c) {
    case '+':
    case '-':
      return 1;
    case 'x':
    case '/':
      return 2;
    default:
      return 0;
  }
}

export const infixToPostfix = (infix) => {
  const operators = []; // stack
  const postfix = [];


  let number = 0;
  let processingNumber = false;
  for (let c of infix) {
    if (c.charCodeAt(0) >= '0'.charCodeAt(0) && c.charCodeAt(0) <= '9'.charCodeAt(0)) {
      number = number * 10 + (c.charCodeAt(0) - '0'.charCodeAt(0));
      processingNumber = true;
    } else {
      if (processingNumber) {
        postfix.push(number);
      }
      number = 0;
      processingNumber = false;

      if (c === '(') {
        operators.push('(');
      } else if (c === ')') {
        while(operators[operators.length - 1] !== '(') {
          postfix.push(operators.pop());
        }
        operators.pop();
      } else {
        while (operators.length > 0 && rank(c) <= rank(operators[operators.length - 1])) {
          postfix.push(operators.pop());
        }
        operators.push(c);
      }
    }
  }
  if (processingNumber) {
    postfix.push(number);
  }
  while(operators.length > 0) {
    postfix.push(operators.pop());
  }

  return postfix;
}

export const evaluatePostfix = (postfix) => {
  const operands = [];
  let a = 0, b = 0;
  for (let s of postfix) {
    if (typeof s === 'string') {
      b = operands.pop();
      a = operands.pop();
      switch (s) {
        case '+':
          operands.push(a + b);
          break;
        case '-':
          operands.push(a - b);
          break;
        case 'x':
          operands.push(a * b);
          break;
        default:
          operands.push(a / b);
      }
    } else {
      operands.push(s);
    }
  }
  return operands.pop();
}