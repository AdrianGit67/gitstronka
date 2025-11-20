<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dane z formularza</title>
    <link rel="stylesheet" href="style6.css" type="text/css">
</head>
<body>

<?php
    $imie = $_POST['imie'];
    $nazwisko = $_POST['nazwisko'];
    $miasto = $_POST['miasto'];
    $ulica = $_POST['ulica'];
    $tel = $_POST['tel'];
    $mail = $_POST['mail'];
    $haslo = $_POST['haslo'];
    $data = $_POST['data'];
    $prawoj = $_POST['prawoj'];
    $plec = $_POST['plec'];
    
echo<<<END
    <h2>Podsumowanie formularza</h2>
    <table>
        <tr>
            <td>Imie:</td> 
            <td>$imie</td>
        </tr>
        <tr>
            <td>Nazwisko:</td> 
            <td>$nazwisko</td>
        </tr>
        <tr>
            <td>Miasto:</td> 
            <td>$miasto</td>
        </tr>
        <tr>
            <td>Ulica:</td> 
            <td>$ulica</td>
        </tr>
        <tr>
            <td>Tel:</td> 
            <td>$tel</td>
        </tr>
        <tr>
            <td>E-mail:</td> 
            <td>$mail</td>
        </tr>
        <tr>
            <td>Hasło:</td> 
            <td>$haslo</td>
        </tr>
        <tr>
            <td>Data urodzenia:</td> 
            <td>$data</td>
        </tr>
        <tr>
            <td>Prawo jazdy:</td> 
            <td>$prawoj</td>
        </tr>
        <tr>
            <td>Płeć:</td> 
            <td>$plec</td>
        </tr>
    </table>

END;
?>

</body>
</html>