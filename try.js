


  //Synchronizing text areas

  let value = ""
const elements = document.querySelectorAll('.synced')
for (let i = 0; i < elements.length; i++) {
  
  elements[i].addEventListener('change', handleChange)
  elements[i].addEventListener('input', handleChange)
  elements[i].addEventListener('keyup', handleChange)
}
function handleChange(e) {
    value = e.target.value
    for (let i = 0; i < elements.length; i++) {
        
      elements[i].value = value
    }
  }

