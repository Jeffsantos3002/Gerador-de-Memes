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
  const listItems = document.querySelectorAll("#colors li");

  listItems.forEach(item => {
    item.addEventListener("click", function() {
      const computedStyle = getComputedStyle(this);
      const backgroundColor = computedStyle.backgroundColor;

      console.log(backgroundColor);
    });
  });
}

colorsBackground();

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
      "name": "funny-cat1",
      "path": "/pictures/funny-cat1.png"
    },
    {
      "name": "funny-cat2",
      "path": "/pictures/funny-cat2.png"
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
  enablePhotoUpload()
  await createGallery(memesImageList)
  await changeMemePicture(memesImageList[1].path)
}

main()
