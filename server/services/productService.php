<?PHP 
declare(strict_types=1);
require_once(__DIR__."/../../vendor/autoload.php");
use Firebase\JWT\JWT;
require (__DIR__."/db.php"); 


abstract class ProductService{
 
    public function __construct() { } 
    public static function getSession($login, $pass){

        $conn = new connectionDB();
        $conn->createConnection();
        $session = null; 

        $query= "SELECT * FROM users WHERE email='$login' and password='$pass' ";
        $result=$conn->executeQuery($query);
    
        $session = $result->fetch_assoc();
       
        if($session){
            $id = $session['id'];
            $key = "ThisOneIsMyPersonalKeyJWT";
            $time = time();
            $payload = array(
                "iat" => $time,
                "exp" => $time + (60*60*24), //Min * / Seg * Days
                "payload" => [
                    "id" => $id
                ]
            );
            $jwt = JWT::encode($payload, $key, 'HS256');
            $date = date("d/m/Y");
            $session["jwt"] = "$jwt";
    
            $query= "INSERT INTO `sessions` (`user_id`, `token`, `date`) VALUES ($id, '$jwt', '$date')";
            $conn->executeQuery($query);
        
            // Closing the connection with BD
            $conn->closeConnection();
            return $session;        
        }
        else{
            return "Error";
        }
       

        // Closing the connection with BD
        $conn->closeConnection();

    }
   
   
}


?>