document.addEventListener('keyup', function(e) {
   /* switch(e.code){
        case 'ArrowUp':
        case 'ArrowLeft':
        case 'ArrowRight':
        case 'ArrowDown':
            imageManager.execute(e.code)
            break
    }*/
    if (imageManager.hasOwnProperty(e.code)) {
        imageManager.execute(e.code)
    }
})

let imageManager = {
    image: document.querySelector('.twitter-picture'),
    ArrowUp: function () {
        this.image.style.top = this.image.offsetTop - 10
    },
    ArrowLeft: function () {
        this.image.style.left = this.image.offsetLeft - 10
    },
    ArrowRight: function () {
        this.image.style.left = this.image.offsetLeft + 10
    },
    ArrowDown: function () {
        this.image.style.top = this.image.offsetTop + 10
    },
}

let availableKeys = ["ArrowUp", "ArrowLeft", "ArrowRight", "ArrowDown"];

imageManager.execute = function (key) {
    let methodName = imageManager[key]
    return methodName.apply(imageManager)
}

setInterval(function () {
    let randomKey =
    availableKeys[Math.floor(Math.random() * availableKeys.length)];
  imageManager.execute(randomKey);
}, 500);