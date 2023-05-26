function enablePhotoUpload(){
  const imageInput = document.querySelector("#img-input")

  imageInput.addEventListener("change", function(){
    const reader = new FileReader()

    reader.addEventListener("load", ()=>{
      const uploadImage = reader.result

      changeMemePicture(uploadImage)
      
      document.querySelector("#display-img").style
        .backgroundImage = `url(${uploadImage})`

    })

    reader.readAsDataURL(this.files[0])

  })

}

function colorsBackground() {
  const listItems = document.querySelectorAll("#colors-background-textarea li");
  const textareas = document.querySelectorAll(".text-box");

  


  listItems.forEach(item => {
    item.addEventListener("click", function() {
      const computedStyle = getComputedStyle(this);
      const backgroundColor = computedStyle.backgroundColor;
      
      textareas.forEach(textarea =>{
        textarea.style.backgroundColor = backgroundColor;
      })
    });
  });
}

function colorsText () {
  const listItems = document.querySelectorAll("#colors-text-textarea li");
  const textareas = document.querySelectorAll(".text-box");

  listItems.forEach(item => {
    item.addEventListener("click", function() {
      const computedStyle = getComputedStyle(this);
      const backgroundColor = computedStyle.backgroundColor;

      
      textareas.forEach(textarea =>{
        textarea.style.color = backgroundColor;
      });
    });
  });
}




async function mapImageList(){
  const memesObject = [
    {
      "name": "chapolin",
      "path": "/pictures/chapolin.jpg"
    },
    {
      "name": "chloe",
      "path": "/pictures/chloe.jpg"
    },
    {
      "name": "Mc Poze",
      "path": "/pictures/Mc-Poze.jpeg"
    },
    {
      "name": "Gatinho",
      "path": "/pictures/gatinho.jpeg"
    },

  ]

  return memesObject

}

async function createGallery(imageList){
  const memeSelector = document.querySelector("#meme-list")

  imageList.forEach(picture => {
    let newOption = document.createElement("option")
    newOption.text = picture.name.toUpperCase()
    newOption.value = picture.path
    memeSelector.appendChild(newOption)
  });

  memeSelector.addEventListener("change", function() {
    const selectedImagePath = this.value;
    changeMemePicture(selectedImagePath);
  });
}


async function changeMemePicture(photo) {
  let displayImage = document.querySelector("#display-img")
  displayImage.style.backgroundImage = `url('${photo}')`
}




async function main(){
  const memesImageList = await mapImageList()
  colorsText();
  colorsBackground();
  enablePhotoUpload()
  await createGallery(memesImageList)
  await changeMemePicture(memesImageList[1].path)
}

main()
