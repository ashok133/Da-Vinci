<?php

//require 'printer.php';

class Contract{
  public $contractId;
  public $companyId;
  public $dateSigned;
  public $terminationId;

  public function __construct($data){
    $this->contractId = $data['ContractID'];
    $this->companyId=$data['CompanyID'];
    $this->dateSigned = intval($data['DateSigned']);
    $this->terminationId = intval($data['TerminationDate']);
  }

  public static function fetchAll(){
    $db = new PDO(DB_SERVER,DB_USER,DB_PW);
    $sql = 'SELECT * from CONTRACT';
    $statement=$db->prepare($sql);
    $success=$statement->execute();
    $arr=[];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $temp =  new Contract($row);
      array_push($arr, $temp);
    }
    return $arr;
  }

  // public function create() {
  //   $db = new PDO(DB_SERVER, DB_USER, DB_PW);
  //   $sql = 'INSERT INTO clientNotes(notes,clientId) VALUES (?,?)';
  //   $statement = $db->prepare($sql);
  //   $success = $statement->execute([
  //     $this->notes,
  //     $this->clientId
  //   ]);
  //   $this->noteId = intval($db->lastInsertId());
  // }
}
