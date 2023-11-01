let menu: number = parseInt(prompt('Bienvenido a mi sistema. \nEscoge una opción del siguiente menú de opciones: \n1. Suma \n2. Resta \n3. Multiplicación \n4. División \n5. Salir'));

if (menu > 0 && menu <= 5) {
    switch (menu) {
        case 1:
            let sum: number = parseInt(prompt('¿Cuántas sumas vas a realizar?'));
            for (let i = 0; i < sum; i++) {
                let a: number = parseInt(prompt(`Ingrese el primer valor de la operación ${i + 1}`));
                let b: number = parseInt(prompt(`Ingrese el segundo valor de la operación ${i + 1}`));
                if (a >= 0 && b >= 0) {
                    let suma: number = a + b;
                    alert(`El resultado de sumar los valores de la operación ${i + 1} es ${suma}`);
                } else {
                    alert(`Ingresaste valores incorrectos`);
                }
            }
            break;
        case 2:
            let rest: number = parseInt(prompt(`¿Cuántas restas vas a realizar?`));
            for (let i = 0; i < rest; i++) {
                let a: number = parseInt(prompt(`Ingrese el primer valor de la operación ${i + 1}`));
                let b: number = parseInt(prompt(`Ingrese el segundo valor de la operación ${i + 1}`));
                if (a >= 0 && b >= 0) {
                    if (a >= b) {
                        let resta: number = a - b;
                        alert(`El resultado de restar los valores de la operación ${i + 1} es ${resta}`);
                    } else {
                        alert(`Ingresaste valores incorrectos. El primer valor debe ser mayor o igual al segundo.`);
                    }
                } else {
                    alert(`Ingresaste valores incorrectos`);
                }
            }
            break;
        case 3:
            let mult: number = parseInt(prompt(`¿Cuántas multiplicaciones vas a realizar?`));
            for (let i = 0; i < mult; i++) {
                let a: number = parseInt(prompt(`Ingrese el primer valor de la operación ${i + 1}`));
                let b: number = parseInt(prompt(`Ingrese el segundo valor de la operación ${i + 1}`));
                if (a >= 0 && b >= 0) {
                    let multiplicacion: number = a * b;
                    alert(`El resultado de multiplicar los valores de la operación ${i + 1} es ${multiplicacion}`);
                } else {
                    alert(`Ingresaste valores incorrectos`);
                }
            }
            break;
        case 4:
            let div: number = parseInt(prompt(`¿Cuántas divisiones vas a realizar?`));
            for (let i = 0; i < div; i++) {
                let a: number = parseInt(prompt(`Ingrese el primer valor de la operación ${i + 1}`));
                let b: number = parseInt(prompt(`Ingrese el segundo valor de la operación ${i + 1}`));
                if (a >= 0 && b >= 0) {
                    if (b == 0) {
                        alert(`No se puede dividir entre cero`);
                    } else {
                        let division: number = a / b;
                        alert(`El resultado de dividir los valores de la operación ${i + 1} es ${division}`);
                    }
                } else {
                    alert(`Ingresaste valores incorrectos.`);
                }
            }
            break;
        case 5:
            alert(`Gracias...`);
            break;
    }
} else {
    alert(`No ingresaste un valor válido dentro del menú`);
}
