const { BOOKS } = require('../models/books');

exports.getallbooks=function(req, res){
    res.json(BOOKS);
}

exports.getbookbyid=function(req, res){
    const id = parseInt(req.params.id);
    const book = BOOKS.find((e)=>e.id===id);
    if(isNaN(id)){
        res.status(400).json({error:"enter valid integer id"})
    }
    if(!book){
        res.status(404).json({error : "book not found"});
    }
    else{
        return res.json(book);
    }
}

exports.createbook=function(req, res){
    const {title, author} = req.body;
    if(!title || title==""){
        return res.status(400).json({error: "title is required"});
    }
    if(!author || author==""){
        return res.status(400).json({error: "author is required"});
    }
    else{
        const newbook = {id: BOOKS.length+1, title, author};
        BOOKS.push(newbook);
        return res.status(201).json(newbook);
    }
}

exports.deletebook=function(req, res){
    const id = parseInt(req.params.id);
    const bookIndex = BOOKS.findIndex((e)=>e.id===id);
    if(isNaN(id)){
        res.status(400).json({error:"enter valid integer id"})
    }
    if(bookIndex<0){
        return res.status(404).json({error : "book not found"});
    }
    else{
        BOOKS.splice(bookIndex, 1);
        return res.status(204).json({error : "book deleted successfully"});
    }
}