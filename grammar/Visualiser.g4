grammar Visualiser;

prog: statement;

statement: assignment
         | condition
         | sequence
         | skip
         ;

assignment: INTID ':=' exprbool;

condition: 'if' comparators 'then' statement 'else' statement ;

sequence: statement ';' statement ;

skip: 'skip' ;


expr: INT
    | INTID
    | operators
    | comparators
    | '(' expr ')'
    ;

exprbool: INT
    | INTID
    | operators
    | exprbool operators exprbool
    | '(' exprbool ')'
    ;


operators: '(' exprbool ('+' | '-' | '*' | '/') exprbool ')';




comparators: '(' exprbool ('<' | '<=' | '>' | '>=' | '==' | '!=') exprbool ')';

INTID: [a-z]+ ;
BOOLID: [A-Z]+ ;
BOOL: 'true' | 'false';
INT: [0-9]+ ;
WS: [ \t\r\n]+ -> skip ;