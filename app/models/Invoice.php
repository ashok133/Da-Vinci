<?php

//require 'printer.php';

class Invoice{

  public $invoiceId;
  public $regulationId;
  public $contractId;
  public $employeeId;
  public $clientId;
  public $dateAdded;
  public $stage;
  public $billToContactName;
  public $billToAddress;
  public $billToPhone;
  public $billToEmail;
  public $billedProductId;
  public $billedProductDesc;
  public $billedProductCost;
  public $billedProductQuantity;
  public $billedProductLineTotal;
  public $concessionBool;
  public $concessionValue;
  public $total;
  public $amountDue;
  public $amountPaid;
  public $paymentDueDate;
  public $paymentTerm
  public $notes;

  public function __construct($data){
    $this->invoiceId = isset($data['InvoiceID']) ? intval($data['InvoiceID']):null;
    $this->regulationId=$data['RegulationID'];
    $this->contractId = $data['ContractID'];
    $this->clientId = $data['ClientID'];
    $this->dateAdded = $data['DateAdded'];
    $this->stage = $data['Stage'];
    $this->amountDue = $data['AmountDue'];
    $this->billToContactName = $data['BillToContactName'];
    $this->billToAddress = $data['BillToAddress'];
    $this->billToPhone = $data['BillToPhone'];
    $this->billToEmail = $data['BillToEmail'];
    $this->billedProductId = $data['BilledProductID'];
    $this->billedProductDesc = $data['BilledProductDesc'];
    $this->billedProductCost = $data['BilledProductCost'];
    $this->billedProductQuantity = $data['BilledProductQuantity'];
    $this->billedProductLineTotal = $data['BilledProductLineTotal'];
    $this->concessionBool = $data['ConcessionBool'];
    $this->concessionValue = $data['ConcessionValue'];
    $this->Total = $data['Total'];
    $this->AmountPaid = $data['AmountPaid'];
    $this->paymentDueDate = $data['PaymentDueDate'];
    $this->paymentTerm = $data['PaymentTerm'];
    $this->notes = $data['Notes'];
  }

  public static function fetchAll(){
    $db= new PDO(DB_SERVER,DB_USER,DB_PW);
    $sql= 'SELECT * from INVOICE';
    $statement=$db->prepare($sql);
    $success=$statement->execute();
    $arr=[];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $temp =  new Invoice($row);
      array_push($arr, $temp);
    }
    return $arr;
  }

  // public function create() {
  //   $db = new PDO(DB_SERVER, DB_USER, DB_PW);
  //   $sql = 'INSERT COMMENT_PHP(comment) VALUES (?)';
  //   $statement = $db->prepare($sql);
  //   $success = $statement->execute([
  //     $this->comment
  //   ]);
  //   $this->id = $db->lastInsertId();
  //   $temp = array (
  //         "id"=>$this->id,
  //         "comment"=>$this->comment
  //       );
  // }
}
