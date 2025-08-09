export type TokenType = string

//定义token结构体
// export type Token = {
//     type: TokenType
//     literal: string
// }
export type Token = {
    type: TokenType;
    literal: string;
}


export const TokenConst = Object.freeze({
    ILLEGAL: "ILLEGAL",
    EOF: "EOF",
    //标识符+字面量
    IDENT: "IDENT", // add, foobar, x, y
    INT: "INT", //123456

    //运算符
    ASSIGN: "=",
    PLUS: "+",
    MINUS: "-",
    BANG: "!",
    ASTERISK: "*",
    SLASH: "/",
    LT: "<",
    GT: ">",
    EQ: "==",
    NOT_EQ: "!=",
    //分隔符
    COMMA: ",",
    SEMICOLON: ";",
    LPAREN: "(",
    RPAREN: ")",
    LBRACE: "{",
    RBRACE: "}",

    //关键字
    FUNCTION: "FUNCTION",
    LET: "LET",
    IF: "IF",
    ELSE: "ELSE",
    RETURN: "RETURN",
    TRUE: "TRUE",
    FALSE: "FALSE"
})

export const keywords = new Map<string, TokenType>();
keywords.set("fn", TokenConst.FUNCTION);
keywords.set("let", TokenConst.LET);
keywords.set("if", TokenConst.IF);
keywords.set("else", TokenConst.ELSE);
keywords.set("return", TokenConst.RETURN);
keywords.set("true", TokenConst.TRUE);
keywords.set("false", TokenConst.FALSE);

// 通过关键字查找对应的类型
export function LookupIdent(ident: string): TokenType {
    if (keywords.has(ident)) {
        return keywords.get(ident)!;
    }
    return TokenConst.IDENT;
}
