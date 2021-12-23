console.log("Prueba");


function matriz(r, c, z, x, y) {
    var arr = [];

    for (var i = 0; i < r; i++) {

        arr.push([]);

        arr[i].push(new Array(c));

        for (var j = 0; j < c; j++) {


            if (i > 1) {
                z = i - 1 + z
            } else {
                z
            }

            arr[i][j] = z;

        }

    }
    console.info(arr)

    var sumador=0;
    for (var i = 0; i < arr.length; i++) {
      sumador =sumador+arr[x][0]+arr[i][y]
      console.log(sumador)
  
    }


    return console.log(sumador);
}

matriz(4, 3, 2, 1, 2)
