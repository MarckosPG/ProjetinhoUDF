window.onload = function () {

    let btn = document.getElementById('calcular_imc');
    let btnCalculadora = document.getElementById("calculadora_btn");
    let btnGen = document.getElementById("inf_genero");
    let btnSal = document.getElementById('calcular_sal');
    let btnMes = document.getElementById("mes_btn");
    let btnCor = document.getElementById("btn_cor");
    let btnFilme = document.getElementById("btn_filme");
    let btnParImpar = document.getElementById("par_impar");

    btn.onclick = function () {
        Swal.fire({
            html: `
                <h2>Calcular IMC</h2>
                <div class='form-group'>
                    <input type='number' step='.01' class='form-control' id='peso' placeholder="Peso">
                </div>
                <div class='form-group'>
                    <input type='number' step='.01' class='form-control' id='altura' placeholder="Altura">
                </div>   
                <div class='form-group'>
                    <div class='btn btn-success' id='calcular_imc_go'>Calcular IMC</div>
                </div>
                <div class='alert alert-success mt-2' id='messagebox' style="display: none;"></div>
            `,
            showConfirmButton: false,
        })

        document.getElementById('calcular_imc_go').onclick = function () {

            let peso = Number(document.getElementById('peso').value);
            let altura = Number(document.getElementById('altura').value);
    
            let imc = ((peso) / altura * altura).toFixed(2);
            
            let messagebox = document.getElementById('messagebox');
    
            messagebox.innerHTML = "O Imc é: " + imc;
            messagebox.style.display = "block";

        }
    }

    btnCalculadora.onclick = function () {
        Swal.fire({
            html: `
                <h2>Calculadora</h2>
                <div class='form-group'>
                    <input type='number' step='.01' class='form-control' id='numero1' placeholder="Primeiro Numero">
                </div>
                <div class='form-group'>
                    <input type='number' step='.01' class='form-control' id='numero2' placeholder="Segundo Numero">
                </div>   
                <div class='form-group'>
                    <select class='form-control' id='operacao'>
                        <option value='1'>Operação(+)</option>
                        <option value='2'>Operação(-)</option>
                        <option value='3'>Operação(*)</option>
                        <option value='4'>Operação(/)</option>
                    </select>
                </div>
                <div class='form-group'>
                    <div class='btn btn-success' id='calculadora_go'>Calcular</div>
                </div>
                <div class='alert alert-success mt-2' id='messagebox' style="display: none;"></div>
            `,
            showConfirmButton: false,
        })
        document.getElementById('calculadora_go').onclick = function () {

            let n1 = Number(document.getElementById('numero1').value);
            let n2 = Number(document.getElementById('numero2').value);
            let operacao = Number(document.getElementById("operacao").value);
    
            let r = 0;

            switch(operacao){
                case 1:
                    r = n1 + n2;
                    break;
                case 2:
                    r = n1 - n2;
                    break;
                case 3:
                    r = n1 * n2;
                    break;
                case 4:
                    r = n1 / n2;
                    break;
            }
            
            let messagebox = document.getElementById('messagebox');
    
            messagebox.innerHTML = "O resultado é: " + r;
            messagebox.style.display = "block";

        }
    }

    btnGen.onclick = function () {
        Swal.fire({
            html: `
                <h2>Informe seu gênero</h2>
                <div class='form-group'>
                    <select class='form-control' id='select'>
                        <option value='1'>Masculino</option>
                        <option value='2'>Feminino</option>
                        <option value='3'>Outros</option>
                    </select>
                </div>
                <div class='form-group'>
                    <div class='btn btn-success' id='btn_go'>Informar</div>
                </div>
                <div class='alert alert-success mt-2' id='messagebox' style="display: none;"></div>
            `,
            showConfirmButton: false,
        })

        document.getElementById('btn_go').onclick = function () {

            let select = Number(document.getElementById("select").value);

            let r = "";

            switch(select){
                case 1:
                    r = "Masculino";
                    break;
                case 2:
                    r = "Feminino"
                    break;
                case 3:
                    r = "Outros";
                    break;
            }

            let messagebox = document.getElementById('messagebox');
    
            messagebox.innerHTML = "O gênero é: " + r;
            messagebox.style.display = "block";

        }

    }

    btnSal.onclick = function () {

        Swal.fire({
            html: `
                <h2>Calcular Salário</h2>
                <div class='form-group'>
                    <input type='number' step='.01' class='form-control' id='salario' placeholder="Digite o Salário">
                </div>
                <div class='form-group'>
                    <input type='number' step='.01' class='form-control' id='gratificacao' placeholder="Digite a Gratificação">
                </div>   
                <div class='form-group'>
                    <div class='btn btn-success' id='go_event'>Calcular Salário</div>
                </div>
                <div class='alert alert-success mt-2' id='messagebox' style="display: none;"></div>
            `,
            showConfirmButton: false,
        })

        document.getElementById('go_event').onclick = function () {

            let salario = Number(document.getElementById('salario').value);
            let gratificacao = Number(document.getElementById('gratificacao').value);

            let messagebox = document.getElementById('messagebox');
    
            let bruto = (gratificacao + salario);

            let imp;
            let liq;

            if(bruto > 1000){
                imp = bruto * (20/100);
                liq = bruto - imp;

                messagebox.innerHTML = "Salário liquido é: " + liq;
                messagebox.style.display = "block";

            }else{

                imp = bruto * (15/100);
                liq = bruto - imp;

                messagebox.innerHTML = "Salário liquido é: " + liq;
                messagebox.style.display = "block";

            }


        }

    }

    btnMes.onclick = function () {

        Swal.fire({
            html: `
                <h2>Descubra o Mes</h2>
                <div class='form-group'>
                    <select class='form-control' id='mes'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>
                        <option value='11'>11</option>
                        <option value='12'>12</option>
                    </select>
                </div>
                <div class='form-group'>
                    <div class='btn btn-success' id='go_event'>Ver</div>
                </div>
                <div class='alert alert-success mt-2' id='messagebox' style="display: none;"></div>
            `,
            showConfirmButton: false,
        })

        document.getElementById('go_event').onclick = function () {

            let mes = Number(document.getElementById('mes').value);

            let meses = [
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Dezembro",
            ];

            mesSelected = meses[mes - 1];

            let messagebox = document.getElementById('messagebox');
    
            messagebox.innerHTML = "O mês é: " + mesSelected;
            messagebox.style.display = "block";


        }

    }

    btnCor.onclick = function () {

        Swal.fire({
            html: `
                <h2>Escolha Cor</h2>
                <div class='form-group'>
                    <input type='color' class='form-control' id='cor'>
                </div> 
                <div class='form-group'>
                    <div class='btn btn-success' id='go_event'>Resultado</div>
                </div>
                <div class='alert alert-success mt-2' id='messagebox' style="display: none;"></div>
            `,
            showConfirmButton: false,
        })

        document.getElementById('go_event').onclick = function () {

            let c = document.getElementById('cor').value;

            let messagebox = document.getElementById('messagebox');
    
            messagebox.innerHTML = "A cor é: " + c;
            messagebox.style.display = "block";

        }

    }

    btnFilme.onclick = function () {
        
        Swal.fire({
            html: `
                <h2>Gênero do Filme</h2>
                <div class='form-group'>
                    <select class='form-control' id='genero_filme'>
                        <option value='Terror'>Terror</option>
                        <option value='Ação'>Ação</option>
                        <option value='Romance'>Romance</option>
                        <option value='Comédia'>Comédia</option>
                        <option value='Ficção'>Ficção</option>
                    </select>
                </div>
                <div class='form-group'>
                    <div class='btn btn-success' id='go_event'>Ver</div>
                </div>
                <div class='alert alert-success mt-2' id='messagebox' style="display: none;"></div>
            `,
            showConfirmButton: false,
        })

        document.getElementById('go_event').onclick = function () {

            let genero = document.getElementById('genero_filme').value;

            let messagebox = document.getElementById('messagebox');
    
            messagebox.innerHTML = "Genero do filme escolhido: " + genero;
            messagebox.style.display = "block";


        }

    }

    btnParImpar.onclick = function () {
        Swal.fire({
            html: `
                <h2>Par ou Impar</h2>
                <div class='form-group'>
                    <input type='number' class='form-control' id='numero' placeholder="Numero">
                </div>
                <div class='form-group'>
                    <div class='btn btn-success' id='go_event'>Ver</div>
                </div>
                <div class='alert alert-success mt-2' id='messagebox' style="display: none;"></div>
            `,
            showConfirmButton: false,
        })

        document.getElementById('go_event').onclick = function () {

            let numero = Number(document.getElementById('numero').value);

            let messagebox = document.getElementById('messagebox');

            function numeroPar (numero) {
                if(numero % 2 == 0){
                    return true;
                }else{
                    return false;
                }
            }

            if(numeroPar(numero)){
                messagebox.innerHTML = `Numero ${numero} é par!`;
            }else{
                messagebox.innerHTML = `Numero ${numero} é impar!`;
            }
    
            messagebox.style.display = "block";


        }

    }

}


