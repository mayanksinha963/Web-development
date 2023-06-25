export function multiply(a,b,c)
{
    return a*b*c;
}


function subtraction (a, b)
{
    return Math.abs(b-a);
}

function addition (a,b)
{
    return a+b;
}

export
{
    subtraction,
    addition as plus
}