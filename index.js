function capitalize(string) {
  return string.at(0).toUpperCase() + string.slice(1);
}

function reverse(string){
    return string.split("").reverse().join("")

}

export { capitalize,reverse };
