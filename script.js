var ressal = document.querySelector('p.res__sal');
var reshe = document.querySelector('p.res__he');
var resfgts = document.querySelector('p.res__fgts');
var resinss = document.querySelector('p.res__inss');
var resva = document.querySelector('p.res__va');
var resvt = document.querySelector('p.res__vt');
var restotal = document.querySelector('p.res__total');
function calcular() {
    var funcao = document.getElementsByName('funcao');
    var salario = '';
    if (funcao[0].checked) {
        salario = '2500';
        var desvt = 2500 * 0.06
        var vtreal = Number(desvt).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        resvt.innerHTML = vtreal;
    } else if (funcao[1].checked) {
        salario = '2200';
        var desvt = 2200 * 0.06
        var vtreal = Number(desvt).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        resvt.innerHTML = vtreal;
    } else if (funcao[2].checked) {
        salario = '2000';
        var desvt = 2000 * 0.06
        var vtreal = Number(desvt).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        resvt.innerHTML = vtreal;
    }
    var salreal = Number(salario).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    ressal.innerHTML = salreal;

    var he = document.getElementById('horasextras');
    var horasextras = salario / 220 * he.value
    var hereal = Number(horasextras).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    reshe.innerHTML = hereal;
    var salariobruto = Number(salario) + Number(horasextras)
    var desfgts = Number(salariobruto) * 0.08
    var fgtsreal = Number(desfgts).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    resfgts.innerHTML = fgtsreal;
        if (Number(salariobruto) <= 1100) {
           var desinss = Number(salariobruto) * 0.075
            var inssreal = Number(desinss).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            resinss.innerHTML = inssreal;
        } else if (Number(salariobruto) <= 2203) {
            var desinss = Number(salariobruto) * 0.09
            var inssreal = Number(desinss).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            resinss.innerHTML = inssreal;
        } else if (Number(salariobruto) <= 3305) {
            var desinss = Number(salariobruto) * 0.12
            var inssreal = Number(desinss).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            resinss.innerHTML = inssreal;
        } else {
            var desinss = Number(salariobruto) * 0.14
            var inssreal = Number(desinss).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            resinss.innerHTML = inssreal;
        }
    var desva = 460 * 0.2;
    var vareal = Number(desva).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    resva.innerHTML = vareal;
    var valortotal = Number(salariobruto) + 460 + 280 - Number(desva) - Number(desfgts) - Number(desinss) - Number(desvt);
    var valorreal = Number(valortotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    restotal.innerHTML = valorreal;
}