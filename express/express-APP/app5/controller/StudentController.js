
//Factory Function
const Student = {
    create:function(req,res,next){
        res.send('student controller method create');
    },
    delete:function(req,res,next){
        res.send('student controller method delete');
    },
    update:function(req,res,next){
        res.send('student controller method update');
    }
}

module.exports = Student;
