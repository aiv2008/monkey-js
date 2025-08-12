import {Lexer} from "./lexer";
import {TokenType, Token, TokenConst} from "../token/token";

function testNextToken() { 
    const input = `let five = 5;
    let ten = 10;
    let add = fn(x, y) {
      x + y;
    };
    let result = add(five, ten);
    !-/*5;
    5 < 10 >5;
    if (5 < 10) {
      return true;
    } else {
      return false;
    }
      10 == 10;
      10 != 9;
    `;
    const tests: Token[] = [
      {type: TokenConst.LET, literal: "let"},
      {type: TokenConst.IDENT, literal: "five"},
      {type: TokenConst.ASSIGN, literal: "="},
      {type: TokenConst.INT, literal: "5"},
      {type: TokenConst.SEMICOLON, literal: ";"},
      {type: TokenConst.LET, literal: "let"},
      {type: TokenConst.IDENT, literal: "ten"},
      {type: TokenConst.ASSIGN, literal: "="},
      {type: TokenConst.INT, literal: "10"},
      {type: TokenConst.SEMICOLON, literal: ";"},
      {type: TokenConst.LET, literal: "let"},
      {type: TokenConst.IDENT, literal: "add"},
      {type: TokenConst.ASSIGN, literal: "="},
      {type: TokenConst.FUNCTION, literal: "fn"},
      {type: TokenConst.LPAREN, literal: "("},
      {type: TokenConst.IDENT, literal: "x"},
      {type: TokenConst.COMMA, literal: ","},
      {type: TokenConst.IDENT, literal: "y"},
      {type: TokenConst.RPAREN, literal: ")"},
      {type: TokenConst.LBRACE, literal: "{"},
      {type: TokenConst.IDENT, literal: "x"},
      {type: TokenConst.PLUS, literal: "+"},
      {type: TokenConst.IDENT, literal: "y"},
      {type: TokenConst.SEMICOLON, literal: ";"},
      {type: TokenConst.RBRACE, literal: "}"},
      {type: TokenConst.SEMICOLON, literal: ";"},
      {type: TokenConst.LET, literal: "let"},
      {type: TokenConst.IDENT, literal: "result"},
      {type: TokenConst.ASSIGN, literal: "="},
      {type: TokenConst.IDENT, literal: "add"},
      {type: TokenConst.LPAREN, literal: "("},
      {type: TokenConst.IDENT, literal: "five"},
      {type: TokenConst.COMMA, literal: ","},
      {type: TokenConst.IDENT, literal: "ten"},
      {type: TokenConst.RPAREN, literal: ")"},
      {type: TokenConst.SEMICOLON, literal: ";"},
      {type:TokenConst.BANG, literal: "!"},
      {type:TokenConst.MINUS, literal: "-"},
      {type:TokenConst.SLASH, literal: "/"},
      {type:TokenConst.ASTERISK, literal: "*"},
      {type:TokenConst.INT, literal: "5"},
      {type: TokenConst.SEMICOLON, literal: ";"},
      {type:TokenConst.INT, literal: "5"},
      {type:TokenConst.LT, literal: "<"},
      {type:TokenConst.INT, literal: "10"},
      {type:TokenConst.GT, literal: ">"},
      {type:TokenConst.INT, literal: "5"},
      {type: TokenConst.SEMICOLON, literal: ";"},
      {type: TokenConst.IF, literal: "if"},
      {type: TokenConst.LPAREN, literal: "("},
      {type: TokenConst.INT, literal: "5"},
      {type: TokenConst.LT, literal: "<"},
      {type: TokenConst.INT, literal: "10"},
      {type: TokenConst.RPAREN, literal: ")"},
      {type: TokenConst.LBRACE, literal: "{"},
      {type: TokenConst.RETURN, literal: "return"},
      {type: TokenConst.TRUE, literal: "true"},
      {type: TokenConst.SEMICOLON, literal: ";"},
      {type: TokenConst.RBRACE, literal: "}"},
      {type: TokenConst.ELSE, literal: "else"},
      {type: TokenConst.LBRACE, literal: "{"},
      {type: TokenConst.RETURN, literal: "return"},
      {type: TokenConst.FALSE, literal: "false"},
      {type: TokenConst.SEMICOLON, literal: ";"},
      {type: TokenConst.RBRACE, literal: "}"},
      {type: TokenConst.INT, literal: "10"},
      {type: TokenConst.EQ, literal: "=="},
      {type: TokenConst.INT, literal: "10"},
      {type: TokenConst.SEMICOLON, literal: ";"},
      {type: TokenConst.INT, literal: "10"},
      {type: TokenConst.NOT_EQ, literal: "!="},
      {type: TokenConst.INT, literal: "9"},
      {type: TokenConst.SEMICOLON, literal: ";"},
    ];

    const lexer = new Lexer(input);

    tests.forEach((test, index) => {
      const token = lexer.nextToken();
      console.log(`2.tokenType:[${token.type}], testType:[${test.type},${test.literal}]`);
      if (token.type !== test.type){
        throw new Error(`Test ${index} failed. Expected ${test.type} but got ${token.type}`);
      }
      if(token.literal !== test.literal){
        throw new Error(`Test ${index} failed. Expected ${test.literal} but got ${token.literal}`);
      }
      // expect(token.type).toBe(test.type);
      // expect(token.literal).toBe(test.literal);
    });
}

testNextToken();