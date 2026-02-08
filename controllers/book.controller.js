const booksTable = require('../models/book.model');
const db = require("../db")
const {eq, sql} = require("drizzle-orm");
const { authorTable } = require('../models');

exports.getallbooks=async function(req, res){
    const search = req.query.search;
    if(search){
        const searchResult=await db.select().from(booksTable).where(sql`to_tsvector('english', ${booksTable.title}) @@ to_tsquery('english', ${search})`);
        return res.json(searchResult);
    }
    const books=await db.select().from(booksTable);
    return res.json(books);
}

exports.getbookbyid=async function(req, res){
    const id = req.params.id;
    const [book] = await db.select().from(booksTable)
    .where(eq(booksTable.id, id))
    .leftJoin(authorTable, eq(booksTable.authorId, authorTable.id))
    .limit(1);
    if(!book){
        res.status(404).json({error : "book not found"});
    }
    else{
        return res.json(book);
    }
}

exports.createbook= async function(req, res){
    const {title, description, authorId} = req.body;
    if(!title || title==""){
        return res.status(400).json({error: "title is required"});
    }
    const [result] = await db.insert(booksTable).values({
        title,
        description,
        authorId,
    }).returning({
        id: booksTable.id,
    });
    return res.status(201).json({message:"Book created success", id: result.id});
}

exports.deletebook= async function(req, res){
    const id = req.params.id;
    await db.delete(booksTable).where(eq(booksTable.id, id))
    return res.status(200).json({error : "book deleted successfully"});
}