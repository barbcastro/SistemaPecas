let listaDePecas = ["Filtro de Ar", "Motor", "Disco de Freio"]

if (listaDePecas.length <10)
{
    console.log("É possível cadastrar mais peças!!")
}
else
{
    console.log("Capacidade insuficiente, não é possível cadastrar")
}

let peso = 50
if (peso <100)
{
    console.log("A peça deve pesar no mínimo 100g")
}
else
{
    console.log("A peça possui o peso adequado.")
}

let nomePeca = "Disco de Freio"
/*
if (nomePeca.length >= 3)
{
    console.log ("Nome da peça adequado para o cadastro")
}
else if(nomePeca.length == 0)
{
    console.log("Nome da peça não pode estar vazio")
}
else 
{
    console.log("Nome precisa de no mínimo 3 caracteres para ser cadastrado")
}
*/

// = atribução de valor;
// == Verificar se os valores são iguais;
//=== verificar se o valores são identicos (tem que ser do mesmo tipo);

switch (nomePeca.length){
    case 0:
        console.log("o nome da peça não pode ser vazio.")
        break;
    case 1:
    case 2:
        console.log("Onome da peça deve ter mais de 3 caracteres.")
        break;
    default:
        console.log("Nome da peça adequado para cadastro.")
        break
}