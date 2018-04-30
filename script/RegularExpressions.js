
/*

Regular Expression
{
      Uma sequência letras que definem um "Search Path for Text".

     Exemplo: posso criar uma regular expression que serve pra procurar números de telefones em textos.

    Meta e Literal character.

   meta chars é :   \d   -> significa qualquer number entre
   literal chars é  tipo um traço, - , e etc..

  No exemplo do número de telefone, ficaria.

  \d\d\d\d-\d\d\d\d
   8 meta character and 1 literal character.

   .  -> qualquer chars
   * -> 0 ou mais.

   exemplo: rainbow.*, quero achar rainbow. seguido por qualquer palavra.


   Meta-Chars
    {
        Single Char:
\d  -> 0-9
\w  -> A-Z or a-z ou 0-9
\s  -> whitespace
.  -> any character what so ever\W -> qualquer coisa que não seja um character word.
\S -> qualquer coisa que não seja um espaço em branco.

        Quantifiers:
*   -> 0 or more
+  -> 1 or more
?  -> 0 or 1, exemplo: pai?s, vai verificar pelas palavras pai ou pais.
{min,max}
{n}

        Position:
^ -> começo
$ -> final
\b -> word bound.
    }

    Character Classes:  [ ], qualquer coisa dentro ele vai verificar se tem alguma daquelas chars, exemplo: [abc],
     ele vai verificar por um a ou b ou c.  E meta-chars não são mais meta-chars dentro de um character class.
     . significado simplesmente ponto. \. também significa literalmente um ponto.

    Alternation :   (), posso colocar palavras completas que ele vai procurar. Exemplo: (.com | .com.br | .net).

   Capturing Groups: dentro de uma expressão regular posso usar () pra captura grupos dentro da expressão regular, sendo o grupo 0 a expressão regular completa.
    $1 para substituir o grupo 1 por algo.
    \1 para verificar um grupo n no proprio grupo 0. Pode ser usado para encontrar se uma palavra aparece duas vezes seguidas.
   Exemplo: pra um numero de telefone,  $1-xxxx, pego o primeiro grupo, que é os primeiros 4 digitos antes do - e substituo o resto por xxxx.

    Flags:
       g - global.
       i - case insensitive.
}

*/
