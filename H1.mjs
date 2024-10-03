

for(let tellerhoogte = 0; tellerhoogte < 4 ; tellerhoogte ++)
{
for(let breedteller = 0; breedteller < tellerhoogte; breedteller++)
{
    process.stdout.write("*");

}
for(let breedteller = 4; breedteller < tellerhoogte; breedteller--)
    {
        process.stdout.write("*");
    
    }
console.log("*")
}
