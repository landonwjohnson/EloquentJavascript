//Write a loop that makes seven calls to console.log to output the following triangle

// "#"
// "##"
// "###"
// "####"
// "#####"
// "######"
// "#######"

var hashtag = '#';

while(hashtag.length <= 7){
    console.log(hashtag);
    hashtag = hashtag + "#"
}

console.log(hashtag.length)