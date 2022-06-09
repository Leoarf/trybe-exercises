let string = "Tryber x aqui!";
let array = ["JavaScript", "Html", "CSS", "Linux", "Jest"];
let string1;

const changeXForOtherString = (string) => (string1 = string.replace("x", "Leonardo"));
changeXForOtherString(string);

////////

const concatenate = () => {
  array.sort();
  let order = `${string1}

  Minhas cinco principais habilidades são:

  ${array[0]}
  ${array[1]}
  ${array[2]}
  ${array[3]}
  ${array[4]}  
  #goTrybe`;
  console.log(order);
}

concatenate();
