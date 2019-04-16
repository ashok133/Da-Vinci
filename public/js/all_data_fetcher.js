var daVinciVueRDB = new Vue ({
  el:'#vueBinderDivRDB',
  data: {
    allEmployees: [],
    allContracts: [],
    allRegulations: [],
    allClients: [],
    allInvoices: []
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
      fetch('http://ec2-54-202-138-243.us-west-2.compute.amazonaws.com/api/invoice.php')
	      .then(response => response.json())
	      .then (json => {
					daVinciVueRDB.allInvoices = json;
					console.log(daVinciVueRDB.allInvoices)
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
    }
  },
  created() {
    // this.fetchAllEmployees();
    // this.fetchAllRegulations();
    // this.fetchAllClients();
    // this.fetchAllContracts();
    this.fetchAllInvoices();
  }
})
