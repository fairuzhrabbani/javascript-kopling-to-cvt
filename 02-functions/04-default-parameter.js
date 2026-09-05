function register(name, gender = "Unknown") {
  return `My Name is ${name}, My gender is ${gender}`;
}

const fairuz = register("Fairuz", "Male");
console.log(fairuz);

const budi = register("Budi");
console.log(budi); // gender Budi akan berisikan Unknown

const joko = register("Joko", undefined);
console.log(joko); // gender Joko akan berisikan Unknown

const nono = register("Nono", null);
console.log(nono); // gender Nono akan berisikan null
