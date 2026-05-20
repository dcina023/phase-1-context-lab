
//To build out the rest of our application we need to utilize our context methods: this and call.
///Remember this essentially "replaces" the need to manually pass the object to the function
//How does that affect our parameters?
///Also we can use call to get the data "passed in" to this. I think?





function createEmployeeRecord(info) {
  return {
    firstName: info[0],
    familyName: info[1],
    title: info[2],
    payPerHour: info[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}

function createEmployeeRecords(employeeRecordsArray) {
  return employeeRecordsArray.map((recordValues) => {
    return createEmployeeRecord(recordValues);
  });
}

function createTimeInEvent(dateStamp) { 
  const [date, hour] = dateStamp.split(" ") 
  this.timeInEvents.push({            
   type: "TimeIn",
   hour: parseInt(hour, 10),             
   date: date,
}) 
   return this
   console.log(this)

  }                                     
function createTimeOutEvent(dateStamp) {
  const [date, hour] = dateStamp.split(" ");

  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date,
  });
  return this
}

function hoursWorkedOnDate(date) {
  const timeIn = this.timeInEvents.find((event) => {
    return event.date === date;
  });

  const timeOut = this.timeOutEvents.find((event) => {
    return event.date === date;
  });

  return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(date) {
  const hoursWorked = hoursWorkedOnDate.call(this, date)

  console.log(hoursWorked)

  return hoursWorked * this.payPerHour
}

function calculatePayroll(employeeRecordsArray) {
  return employeeRecordsArray.reduce((totalPayroll, employee) => {
    return totalPayroll + allWagesFor.call(employee);
  }, 0);
}

function findEmployeeByFirstName(collection, firstNameString) {
  return collection.find(employee => {
    return employee.firstName === firstNameString
  })
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0,
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};
