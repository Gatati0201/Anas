function validation() {

    var motdepasse = document.getElementById('motdepasse').value;
    var confirm = document.getElementById('confirm').value;
    if (motdepasse != confirm) {
        document.getElementById('wrong_pass_alert').innerHTML
        = '☒ Use same password';
        document.getElementById('create').disabled = true;
        document.getElementById('create').style.opacity = (0.4);
    } 
    else {
        document.getElementById('wrong_pass_alert').style.color = 'green';
        document.getElementById('wrong_pass_alert').innerHTML =
            '🗹 Password Matched';
        document.getElementById('create').disabled = false;
        document.getElementById('create').style.opacity = (1);
    }
}



