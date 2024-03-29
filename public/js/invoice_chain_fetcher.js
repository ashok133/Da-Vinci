var daVinciVueBC = new Vue ({
  el:'#vueBinderDivBC',
  data: {
    allTransactions: {},
    lastTransaction: {},
    specificTransaction: {}
  },
  methods: {
    fetchAllTransactions() {
      fetch('https://invoice-ledger.herokuapp.com/get_all_invoices')
	      .then(response => response.json())
	      .then (json => {
					daVinciVueBC.allTransactions = json;
					console.log(daVinciVueBCdaVinciVueBC.allTransactions)
				})
	      .catch( function(err){
	        console.log(err)
	      })
    },
    fetchSpecificTransaction() {
      fetch('https://invoice-ledger.herokuapp.com/get_specific_invoice', {
            // mode: 'cors',
            body : JSON.stringify( {
                  "invoice": "1211"
            }),
			      headers: {
			        'Accept': 'application/json, text/plain, */*',
			        'Content-Type': 'application/json; charset=utf-8'
			      },
			      method: "POST"
			    })
	      .then(response => response.json())
	      .then (json => {
					daVinciVueBC.specificTransaction = json;
					console.log(daVinciVueBC.specificTransaction)
				})
	      .catch( function(err){
	        console.log(err)
	      })
    },
    fetchLastTransaction() {
      fetch('https://invoice-ledger.herokuapp.com/get_last_invoice')
	      .then(response => response.json())
	      .then (json => {
					daVinciVueBC.lastTransaction = json;
					console.log(daVinciVueBC.lastTransaction)
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
              "AmountDue": document.getElementById("AmountDue").value,
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
    // this.addTransaction();
    // this.fetchAllTransactions();
    // this.fetchSpecificTransaction();
  }
})
