 /* 12. Write a function to calculate how many years there are left until retirement based on the year of birth.
 Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.*/
    function retirement (yearOfBirth, sex) {
        var result = "";
        var age = 2022 - yearOfBirth;
  
        if (sex === "men") {
          if (age < 65) {
            result = "Years until retirement: " + (65 - age);
          } else {
            result = "Already retired";
          }
        }
  
        if (sex === "women") {
          if (age < 60) {
            result = "Years until retirement: " + (60 - age);
          } else {
            result = "Already retired";
          }
        }
  
        console.log(result);
      }
     retirement(1985, "women");