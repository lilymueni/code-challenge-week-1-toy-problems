// code challenge week 1 :Toy Problems



//create a funtion named studentGradeGenerator that prompts user to input student marks

function studentGradeGenerator (studentMarks){
    
    //create conditional statements  (if) the condition set is met
    if(studentMarks >79 && studentMarks <= 100){
        return "A";
    //check if student marks is between 60 and 79 and return grade B
    }else if(studentMarks >=60 && studentMarks <=79){
        return "B";
    //check if student marks is between 50 and 59 and return grade C
    }else if(studentMarks >=50 && studentMarks <= 59){
        return "c";
    
    //check if student marks is between 40 and 49 and return grade D 
    }else if(studentMarks >=40 && studentMarks <= 49){
        return "D";
    //check if student marks is below 40 
    }else if(studentMarks < 40){
        return "E";
    }
      
}