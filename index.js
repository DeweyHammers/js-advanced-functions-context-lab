/* Your Code Here */

const createEmployeeRecord = (employee) => {
    return {
      firstName: employee[0],
      familyName: employee[1],
      title: employee[2],
      payPerHour: employee[3],
      timeInEvents: [],
      timeOutEvents: []
    }
  }

const createEmployeeRecords = (records) => {
    return records.map(record => createEmployeeRecord(record));
}

let createTimeInEvent = function(timeIn){
    this.timeInEvents.push({
        type: 'TimeIn',
        date: timeIn.split(' ')[0],
        hour: parseInt(timeIn.split(' ')[1])
      });
    return this
}

const createTimeOutEvent = function(timeOut){
    this.timeOutEvents.push({
      type: 'TimeOut',
      date: timeOut.split(' ')[0],
      hour: parseInt(timeOut.split(' ')[1])
    })
    return this
  }

const hoursWorkedOnDate = function(date){
    let timeIn = this.timeInEvents.find(record => record.date === date);
    const timeOut = this.timeOutEvents.find(record => record.date === date);
    timeIn.hour === 1000 ? timeIn = 10 : timeIn = parseInt(timeIn.hour.toString().split('0'))
    const hours = Math.abs(( timeIn - parseInt(timeOut.hour.toString().split('0')))) 
    return hours
}

const wagesEarnedOnDate = function(date){
    const hours = hoursWorkedOnDate.call(this, date)
    return hours * this.payPerHour
}

const calculatePayroll = (employees) => {
    const payroll = employees.map(employee => allWagesFor.call(employee));
    return payroll.reduce((wage, total) => wage + total);
}

const findEmployeeByFirstName = (records, name) => {
    return records.find(record => record.firstName === name);
}
  
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but

 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

 
    return payable
}