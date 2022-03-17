<?PHP

abstract class api {

    public $method;


    public function handleRequest() {

        $method = $_SERVER['REQUEST_METHOD'];

        switch($method) {

            case "GET": 
                $this->get();
            break; 
            
            case "POST": 
                $this->post();
            break;  

            case "PUT": 
                $this->put();
            break;
                    
            case "DELETE":
                $this->delete();
            break;

        }
        return $method;
    }
    public static function responseCode($code = 200){
                  
        $status = array(
            200 => '200 OK',
            400 => '400 Bad Request',
            500 => '500 Internal Server Error'
        );
        // ok, validation error, or failure
        header('Status: '.$status[$code]);
        return $status[$code];
    }
    abstract function  get();
    abstract function  post();
    abstract function  put();
    abstract function  delete();

}


  
?>
