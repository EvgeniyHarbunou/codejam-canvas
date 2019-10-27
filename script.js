const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 512;


const data4x4 = 'https://raw.githubusercontent.com/Gamuro/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json';
const data32 = 'https://raw.githubusercontent.com/Gamuro/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json';
action(data4x4);
document.getElementById('4x4').addEventListener('click', () => {

    action(data4x4);
});
document.getElementById('32x32').addEventListener('click', () => {

    action(data32);
});

document.getElementById('256x256').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var img = new Image();
    img.onload = function () {
        ctx.drawImage(img, 128, 128);
    };
    img.src = './assets/image.png';



    //     canvas.style.backgroundImage = "url('./assets/image.png')";
    //     ctx.drawImage('./assets/image.png', 0, 0, canvas.width, canvas.height);
    //    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    return;
});




function action(data) {
    fetch(data)
        .then((res) => {
            return res.json();
        })
        .then((data) => {

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var sizePixels = 512 / data.length;
            console.log(sizePixels);

            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < data.length; j++) {

                    if (data.length === 4) {

                        ctx.fillStyle = `#${data[i][j]}`;

                    }
                    else {

                        ctx.fillStyle = `rgba(${data[i][j][0]},${data[i][j][1]},${data[i][j][2]},${data[i][j][3] / 255})`;

                    }

                    ctx.fillRect(j * sizePixels, i * sizePixels, sizePixels, sizePixels);
                }
            }
        });
}