<?php

//TXT
$nome = isset($_POST['nome']) ? $_POST['nome'] :null;
$email = isset($_POST['email']) ? $_POST['email'] :null;

function gravar($texto){
    $arquivo = "texto.txt";
    $fp = fopen($arquivo, "a");
    fwrite($fp, $texto);
    fclose($fp);
}

if ($nome != null && $email != null ){
    setcookie("email", $email);
    $texto = "Nome: ". $nome .". Email: ".$email ."\n";
    gravar($texto);
    header('Location: /teste-pratico/index.html');
}else{
    echo "<script>alert('Dados Incorretos! Tente novamente, por favor');</script>";
    header('Location: /teste-pratico/index.html');
}
?>