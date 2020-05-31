(function () {

    var url = window.location.href;

    if (url == 'https://app.vendavalida.com.br/novo') {
        autoFill()
    };

    // Gera numero ramdomico entre um min e max

    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // PRennche os campos da execucao manual
    function autoFill() {

        // prennche numero da transacao
        var orderid = document.getElementById('businessorderid');
        orderid.value = getRandom(1000, 100000);

        // Preenche CPF
        var customerdocument = document.getElementById('customerdocument');
        customerdocument.value = '42704282870';

        // Prennche Celular
        var phone = document.getElementById('customerMobilePhone');
        phone.value = '11940788758';

        // Preenche valor
        var orderValue = document.getElementsByName('customFields.orderValue')[0];
        orderValue.value = getRandom(30, 130);

        // Prennche nome
        var name = document.getElementsByName('customFields.buyerName')[0];
        name.value = 'Rodrigo Ferreira da Silva'

        // Preenche email
        var email = document.getElementsByName('customFields.email')[0];
        email.value = 'rodrigo@vendavalida.com.br'
    };

}());