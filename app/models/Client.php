<?php

//require 'printer.php';

class Client{

  public $clientId;
  public $currentInvoiceId;
  public $handlerEmployeeId;
  public $name;
  public $phone;
  public $countryCode;
  public $contactEmail;

  public function __construct($data){
    $this->clientId = isset($data['ClientID']) ? intval($data['ClientID']):null;
    $this->currentInvoiceId=$data['CurrentInvoiceID'];
    $this->handlerEmployeeId = $data['HandlerEmployeeID'];
    $this->name = $data['Name'];
    $this->phone = $data['Phone'];
    $this->countryCode = $data['CountryCode'];
    $this->contactEmail = $data['ContactEmail'];
  }

  public static function fetchAll(){
    $db= new PDO(DB_SERVER,DB_USER,DB_PW);
    $sql= 'SELECT * from CLIENT';
    $statement=$db->prepare($sql);
    $success=$statement->execute();
    $arr=[];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $temp =  new Client($row);
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
