<?php

//require 'printer.php';

class Employee{

  public $employeeId;
  public $firstName;
  public $lastName;
  public $department;
  public $expPoints;
  public $level;
  public $turnedInvoices;
  public $pendingInvoices;

  public function __construct($data){
    $this->employeeId = isset($data['EmployeeID']) ? intval($data['EmployeeID']):null;
    $this->firstName=$data['FirstName'];
    $this->lastName=$data['LastName'];
    $this->department=$data['Department'];
    $this->expPoints=$data['ExpPoints'];
    $this->level=$data['Level'];
    $this->turnedInvoices=$data['TurnedInvoices'];
    $this->pendingInvoices=$data['PendingInvoices'];
  }

  public static function fetchAll(){
    $db= new PDO(DB_SERVER,DB_USER,DB_PW);
    $sql= 'SELECT * from EMPLOYEE';
    $statement=$db->prepare($sql);
    $success=$statement->execute();
    $arr=[];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $employees =  new Employee($row);
      array_push($arr, $employees);
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
  //   // echo $temp["id"];
  //   // echo $temp["comment"];
  //   // array_push($json_response,$temp);
  //   // echo json_encode($json_response, JSON_PRETTY_PRINT);
  // }
}
