// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

var square = (x) => {
    return x * x;
  };
  
  console.log(square(5));

  const modal = document.querySelector(".modal")

  const p = new Promise((resolve, reject)=> {
      setTimeout(()=> {
        resolve( "yay")
       return modal.style.display = "block"
      }, 60000)

      document.querySelector(".close").addEventListener("click", ()=> {
        modal.style.display = ""
      })
   
   
  } )

  p.then((result) => {
      console.log("done", result)
  })
  p.catch((error) => {
      console.loh("done", error)
  })
  p.finally(()=> {
    console.log("finally")
})