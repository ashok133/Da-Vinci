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
            body : {
              "InvoiceID": "NV/17T0132066",
              "RegulationID": "R-15",
              "ContractID": "PS-1101418",
              "EmployeeID": 1102,
              "ClientID": 2,
              "DateAdded": "04/08/19",
              "Stage": "sent",
              "AmountDue": 1944000,
              "BillToContactName": "Magnificent Inc.",
              "BillToAddress": "IN",
              "BillToPhone": 8867640912,
              "BillToEmail": "sales@mag.com",
              "BilledProductID": "9260LWFB",
              "BilledProductDesc": "HANA P5",
              "BilledProductCost": 125321,
              "BilledProductQuantity": 1,
              "BilledProductLineTotal": 125321,
              "ConcessionBool": 1,
              "ConcessionValue": 45000,
              "Total": 80321,
              "AmountDue__1": 80321,
              "AmountPaid": "",
              "PaymentDueDate": "05/08/19",
              "Notes": "requested early payment"
            },
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
  }
})
