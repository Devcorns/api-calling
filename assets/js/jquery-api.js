const employee = {
    url : "http://dummy.restapiexample.com/api/v1/employees",
    getAllEmployee: (evt) => {
        $.ajax({
            url: "http://dummy.restapiexample.com/api/v1/employees",
            method:'get',
            async: false,
            cache :false,
            context: document.body,
            beforeSend: function(e) {
                console.log("before send works",this.url,this.context)
            },
            fail:function(e) {
                console.log("Here its fail",this.url)
            },
            error: function(err) {
                console.log(err)
            },
            complete: (data) => {
                dataArrayOfObj = JSON.parse(data.responseText);
                dataArrayOfObj = dataArrayOfObj.filter(item=> parseInt(item.employee_age)>20);
                console.log(dataArrayOfObj)
            }
        });
    },
    setEmployee: (empname,sal,age) => {
        $.ajax({
            url: "http://dummy.restapiexample.com/api/v1/create",
            method:'POST',
            async: false,
            cache :false,
            contentType: 'application/json; charset=utf-8',
            dataType: 'application/json',
            data: jQuery.param({ 
                name: empname,
                salary: sal,
                age: age
            }),
            beforeSend: function(e) {
                console.log("Trying to send data"); 
            },
            fail: function(e) {
                console.log("Here its fail",this.url)
            },
            success:function(res){
                console.log(res);
            },
            complete: (data) => {
                console.log(data);
            }, 
            error: function(err) {
                console.log("Getting error",err)
            }
        });
    }
}

let getEmployees = (evt) => {employee.getAllEmployee(evt)};

let addEmployees = (emp,sal,age) => {employee.setEmployee(emp,sal,age)};




