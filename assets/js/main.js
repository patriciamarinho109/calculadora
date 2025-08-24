function criaCalculadora () {

    return {
        display: document.querySelector('.display'),

        inicia () {
            this.clickButton();
        },

        clickButton() {
            document.addEventListener('click', e => {
                const el = e.target

                if(el.classList.contains('btn-num')) {
                    this.btnToDisplay(el.innerText)
                };

                if(el.classList.contains('btn-clear')) {
                    this.btnClear();
                };

                if(el.classList.contains('btn-back')) {
                    this.btnBackspace();
                };

                if(el.classList.contains('btn-eq')) {
                    this.btnEqual();
                };
            })
        },

        btnEqual() {
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta) {
                    alert('Conta inválida!')
                    return;
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('Error')
                return;
            }
        },

      btnBackspace() {
        this.display.value = this.display.value.slice(0, -1);
      },


      btnClear() {
        this.display.value = '';
      },
      
        btnToDisplay(valor) {
            this.display.value += valor;
        }
    };

}

const calculadora = criaCalculadora();
calculadora.inicia()