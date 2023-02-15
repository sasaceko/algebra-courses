var names = ['John', 'Jane', 'Bob',, 'Mike'];

for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

names.push('Saša');
console.log(names);

for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
    if (names[i] == "Jane") { break };
}

names = names.filter(function( name ) {
    return name !== undefined;
 });
 
 console.log(names);