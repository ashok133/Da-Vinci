var daVinciVueRDB = new Vue ({
  el:'#vueBinderDivRDB',
  data: {
    allEmployees: [],
    allContracts: [],
    allRegulations: [],
    allClients: [],
    allInvoices: [],
    stupid: "STUPID",
    specificTransaction: {
      InvoiceID: "sdasda"
    },
    accountHistory: [],
    invoicePrediction: {},
    invoicePredictionText: ''
  },
  methods: {
    fetchAllEmployees() {
      fetch('http://ec2-54-202-138-243.us-west-2.compute.amazonaws.com/api/employee.php')
	      .then(response => response.json())
	      .then (json => {
					daVinciVueRDB.allEmployees = json;
					console.log(daVinciVueRDB.allEmployees)
				})
	      .catch( function(err){
	        console.log(err)
	      })
    },
    fetchAllInvoices() {
      fetch('http://ec2-54-202-138-243.us-west-2.compute.amazonaws.com/api/invoice.php', {
      })
	      .then(response => response.json())
	      .then (json => {
					daVinciVueRDB.allInvoices = json;
					console.log(daVinciVueRDB.allInvoices[0])
				})
	      .catch( function(err){
	        console.log(err)
	      })
    },
    fetchSpecificTransaction() {
      console.log(document.getElementById("invoiceToFetch").value);
      fetch('https://invoice-ledger.herokuapp.com/get_specific_invoice', {
            method: "POST",
            body : JSON.stringify({
              "invoice": document.getElementById("invoiceToFetch").value
                  // "invoice": "1211"
            }),
			      headers: {
			        'Accept': 'application/json, */*',
			        'Content-Type': 'application/json; charset=utf-8'
			      },
			    })
	      .then(response => response.json())
	      .then (json => {
          // console.log(json);
					daVinciVueRDB.specificTransaction = json;
					console.log(daVinciVueRDB.specificTransaction)
				})
	      .catch( function(err){
	        console.log(err)
	      })
    },
    fetchAccountHistory() {
      fetch('https://invoice-ledger.herokuapp.com/get_account_history', {
            method: "POST",
            body : JSON.stringify({
              "invoice": "1211"
                  // "invoice": "1211"
            }),
			      headers: {
			        'Accept': 'application/json, */*',
			        'Content-Type': 'application/json; charset=utf-8'
			      },
			    })
	      .then(response => response.json())
	      .then (json => {
          // console.log(json);
					daVinciVueRDB.accountHistory = json;
					console.log(daVinciVueRDB.accountHistory)
				})
	      .catch( function(err){
	        console.log(err)
	      })
    },
    fetchAllClients() {
      fetch('http://ec2-54-202-138-243.us-west-2.compute.amazonaws.com/api/client.php')
	      .then(response => response.json())
	      .then (json => {
					daVinciVueRDB.allClients = json;
					console.log(daVinciVueRDB.allClients)
				})
	      .catch( function(err){
	        console.log(err)
	      })
    },
    fetchAllRegulations() {
      fetch('http://ec2-54-202-138-243.us-west-2.compute.amazonaws.com/api/regulation.php')
	      .then(response => response.json())
	      .then (json => {
					daVinciVueRDB.allRegulations = json;
					console.log(daVinciVueRDB.allRegulations)
				})
	      .catch( function(err){
	        console.log(err)
	      })
    },
    fetchAllContracts() {
      fetch('http://ec2-54-202-138-243.us-west-2.compute.amazonaws.com/api/contract.php')
	      .then(response => response.json())
	      .then (json => {
					daVinciVueRDB.allContracts = json;
					console.log(daVinciVueRDB.allContracts)
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
    },
    predictInvoiceDelay() {
      fetch('https://invoice-ledger.herokuapp.com/predict_invoice_delay', {
            method: "POST",
            body : JSON.stringify({
            	"country_code": document.getElementById('countryCode').value,
            	"invoice_amount": document.getElementById('invoiceAmount').value,
            	"disputed": document.getElementById('disputed').value,
            	"days_to_settle": document.getElementById('daysToSettle').value,
            	"available_days": document.getElementById('availableDays').value,
            	"paperless_bool": document.getElementById('paperless').value
            }),
			      headers: {
			        'Accept': 'application/json, */*',
			        'Content-Type': 'application/json; charset=utf-8',
              'Access-Control-Allow-Origin': '*'
			      },
			    })
	      .then(response => response.json())
	      .then (json => {
          // console.log(json);
					daVinciVueRDB.invoicePrediction = json;
					console.log(daVinciVueRDB.invoicePrediction['prediction'])
          if (daVinciVueRDB.invoicePrediction['prediction'] == 1.0) {
            console.log('Son of a bitch this works!')
            daVinciVueRDB.invoicePredictionText = 'The client is likely to delay this time, consider taking action.'
          }
          else {
            daVinciVueRDB.invoicePredictionText = 'The client is not likely to delay this time, sit back and relax.'
          }
				})
	      .catch( function(err){
	        console.log(err)
	      })
    }
  },
  created() {
    // this.fetchAllEmployees();
    // this.fetchAllRegulations();
    // this.fetchAllClients();
    // this.fetchAllContracts();
    this.fetchAllInvoices();
    this.fetchAccountHistory()
  }
})
