
function home(req,res,next){
    res.send('this is Home Method of IndexController');
}

const contact = (req,res,next) => {
    res.send('this is contact method of IndexController');
}


module.exports = {
    home:home,
    contact:contact,
}