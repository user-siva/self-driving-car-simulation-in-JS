const canv = document.getElementById("canv")
canv.width = 200

const ctx = canv.getContext("2d")
const car = new Car(100,100,30,50)

animate()

function animate() {
    car.update();
    canv.height = window.innerHeight
    car.draw(ctx);
    requestAnimationFrame(animate);
}