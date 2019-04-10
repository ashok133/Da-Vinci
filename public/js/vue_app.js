var daVinciVue = new Vue ({
  el:'#vueBinderDiv',
  data: {
    allTransactions: {},
    lastTransaction: {}
  },
  methods: {

    fetchAllTransactions() {
      fetch('https://invoice-ledger.herokuapp.com/get_all_invoices')
	      .then(response => response.json())
	      .then (json => {
					daVinciVue.allTransactions = json;
					console.log(daVinciVue.allTransactions)
				})
	      .catch( function(err){
	        console.log(err)
	      })
    },
    fetchLastTransaction() {
      fetch('https://invoice-ledger.herokuapp.com/get_last_invoice')
	      .then(response => response.json())
	      .then (json => {
					daVinciVue.lastTransaction = json;
					console.log(daVinciVue.lastTransaction)
				})
	      .catch( function(err){
	        console.log(err)
	      })
    },
    addTransaction() {
      fetch('https://invoice-ledger.herokuapp.com/add_invoice', {
			      // body : JSON.stringify({
            //
			      //     "clientId": document.getElementById("clientId").value,
			      //     "notes": document.getElementById("comment").value
            //
			      // }),
            body : JSON.stringify( {
              "InvoiceID": document.getElementById("InvoiceID").value,
              "RegulationID": document.getElementById("RegulationID").value,
              "ContractID": document.getElementById("ContractID").value,
              "EmployeeID": document.getElementById("EmployeeID").value,
              "ClientID": document.getElementById("ClientID").value,
              "DateAdded": document.getElementById("DateAdded").value,
              "Stage": document.getElementById("Stage").value,
              "AmountDue": document.getElementById("AmountDue").value,
              "BillToContactName": document.getElementById("BillToContactName").value,
              "BillToAddress": document.getElementById("BillToAddress").value,
              "BillToPhone": document.getElementById("BillToPhone").value,
              "BillToEmail": document.getElementById("BillToEmail").value,
              "BilledProductID": document.getElementById("BilledProductID").value,
              "BilledProductDesc": document.getElementById("BilledProductDesc").value,
              "BilledProductCost": document.getElementById("BilledProductCost").value,
              "BilledProductQuantity": document.getElementById("BilledProductQuantity").value,
              "BilledProductLineTotal": document.getElementById("BilledProductLineTotal").value,
              "ConcessionBool": document.getElementById("ConcessionBool").value,
              "ConcessionValue": document.getElementById("ConcessionValue").value,
              "Total": document.getElementById("Total").value,
              "AmountDue__1": document.getElementById("AmountDue__1").value,
              "AmountPaid": document.getElementById("AmountPaid").value,
              "PaymentDueDate": document.getElementById("PaymentDueDate").value,
              "Notes": document.getElementById("Notes").value,
            }),
			      // mode: "no-cors", // no-cors, cors, *same-origin
			      headers: {
			        'Accept': 'application/json, text/plain, */*',
			        'Content-Type': 'application/json; charset=utf-8'
			      },
			      method: "POST"
			    })
    }
  },
  created() {
    this.addTransaction();
    this.fetchAllTransactions();
  }
})
