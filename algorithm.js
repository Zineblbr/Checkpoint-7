let l, w, v : integer
let c : String
l = 0;
w = 0;
v = 0;

Begin
    do 
        write ("Please write your sentence character by character")
        read c
        l++
        if ( c == " " ) then
            w++;
        else if ( c == "a" || c == "e" || c == "i" || c == "o" || c == "u" )
            v++ 
    while ( c != '.')
    write ("The length of the sentence is ",l," the number of words is ",w, " the number of vowels is ",v)
End    
    
    