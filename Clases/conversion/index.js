let balor = prompt('cual es el balor que dese convertir?')
let medidas = prompt('a cual medida quieres convertirla, cm, m, km, mill?')

switch (medidas)
{
    
case 'cm':
    resultado = alert('el resulado en cm es:'+ balor)
    break;

case 'm':
    resultado = alert('el resulado en m es:'+ balor*100)
    break;

case 'km':
    resultado = alert('el resulado en klm es:' +balor*1000)
    break;

case 'mill':
    resultado = alert('el resulado en klm es:' +balor*160934)

}