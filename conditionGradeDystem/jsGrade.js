var result = 3

    if (result >=80){
        console.log('you have got A+')
    }
    else if (result >=70){
        console.log('you have got A')
    }
    else if (result >=60){
        console.log('you have got A-')
    }
    else if (result >=50){
        console.log('you have got B')
    }
    else if (result >=40){
        console.log('you have got C')
    }
    else if (result >=33){
        console.log('you have got D')
    }else {
        console.log('you are faill stupid')
    }

// out topic 

    for (var i = 0; i<50;i++){
        if (i % 3 == 0 && i % 5 == 0){
            console.log(i + ' i % 3 == 0 && i % 5 == 0')
        }else if (i % 3 == 0){
            console.log(i +' i % 3 =0  ')
        }else if (i % 5 == 0 && i % 5 == 0){
            console.log(i + ' i % 5 =0 ' )
        }else{
            console.log(i)
        }
    }
