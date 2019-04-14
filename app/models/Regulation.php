<?php

//require 'printer.php';

class Regulation{

  public $regulationId;
  public $regulationCountryCode;
  public $regulationTerms;

  public function __construct($data){
    $this->regulationId = isset($data['RegulationID']) ? intval($data['RegulationID']):null;
    $this->regulationCountryCode=$data['RegulationCountryCode'];
    $this->regulationTerms = $data['RegulationTerms'];
  }

  public static function fetchAll(){
    $db= new PDO(DB_SERVER,DB_USER,DB_PW);
    $sql= 'SELECT * from REGULATION';
    $statement=$db->prepare($sql);
    $success=$statement->execute();
    $arr=[];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $temp =  new Regulation($row);
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
