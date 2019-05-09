
Suggestion to tune Library application performance:
The scenario to query students who are late returning books are frequently happened,
    then we should index borrowedBy, borrowedDate
//Books collection
{
    _id: objectId,
        ISBN: String,
        author:[{author1, author2}],
        tag:[{tag1, tag2}],
        borrowedDate:Date,
        borrowedBy:user1
}

//authors collection
{
    _id:objectId,
        authorId: author1,
        name: String

}

//users collection
{
    _id:ObjectId(),
        username:user1,
        firstname: name1,
        lastname:name11
}