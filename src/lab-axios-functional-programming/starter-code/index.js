


axios.get("https://raw.githubusercontent.com/mc100s/training-labs-react/master/src/lab-axios-functional-programming/result.json")
.then(response => {
  console.log('DEBUG response.data', response.data);
})