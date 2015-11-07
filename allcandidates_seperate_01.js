 var trump = {
   "name": "Donald Trump",
   "rank": "1",
   "size":100,
   "pic": "trump.png",
   "children": [
    {"name": "Ben Carson", "rank": "1", "size":100, "pic":"carson.png"},
    {"name": "Marco Rubio", "rank": "2","size":100, "pic":"rubio.png"},
    {"name": "Jeb Bush", "rank": "3","size":100, "pic":"bush.png"},
    {"name": "Ted Cruz", "rank": "4","size":100, "pic":"cruz.png"},
    {"name": "Carly Fiorina","rank": "5", "size":100, "pic":"fiorina.png"}   
   ]
  };

  var carson = {
   "name": "Ben Carson",
   "rank": "2",
   "size":100,
   "pic": "carson.png",
   "children": [
    {"name": "Donald Trump", "rank": "1", "size":100, "pic":"trump.png"},
    {"name": "Carly Fiorina","rank": "2", "size":100, "pic":"fiorina.png"},
    {"name": "Marco Rubio", "rank": "3","size":100, "pic":"rubio.png"},
    {"name": "Ted Cruz", "rank": "4","size":100, "pic":"cruz.png"},   
    {"name": "Jeb Bush", "rank": "5","size":100, "pic":"bush.png"}
    
   ]
  };

  var rubio = {
  "name": "Marco Rubio",
   "rank": "3",
   "size":100,
   "pic": "rubio.png",
   "children": [
    {"name": "Ted Cruz", "rank": "1","size":100, "pic":"cruz.png"},
    {"name": "Jeb Bush", "rank": "2","size":100, "pic":"bush.png"},
    {"name": "Ben Carson", "rank": "3","size":100, "pic":"carson.png"},
    {"name": "Donald Trump", "rank": "4","size":100, "pic":"trump.png"},
    {"name": "Carly Fiorina","rank": "5", "size":100, "pic":"fiorina.png"}
   ]
  };

  var cruz = {
   "name": "Ted Cruz",
   "rank": "4",
   "size":100,
   "pic": "cruz.png",
   "children": [
    {"name": "Marco Rubio", "rank": "1","size":100, "pic":"rubio.png"},
    {"name": "Ben Carson", "rank": "2","size":100, "pic":"carson.png"},
    {"name": "Donald Trump", "rank": "3","size":100, "pic":"trump.png"},
    {"name": "Carly Fiorina", "rank": "4","size":100, "pic":"fiorina.png"},
    {"name": "Jeb Bush", "rank": "5","size":100, "pic":"bush.png"}
   ]
  };

  var bush = {
   "name": "Jeb Bush",
   "rank": "5",
   "size":100,
   "pic": "bush.png",
   "children": [
    {"name": "Marco Rubio", "rank": "1", "size":100, "pic":"rubio.png"},
    {"name": "Donald Trump", "rank": "2", "size":100, "pic":"trump.png"},
    {"name": "Ted Cruz", "rank": "3","size":100, "pic":"cruz.png"},
    {"name": "Ben Carson", "rank": "4", "size":100, "pic":"carson.png"},
    {"name": "Carly Fiorina", "rank": "5","size":100, "pic":"fiorina.png"}   
   ]
  };

  var fiorina = {
   "name": "Carly Fiorina",
   "rank": "6",
   "size":100,
   "pic": "fiorina.png",
   "children": [
    {"name": "Ben Carson", "rank": "1","size":100, "pic":"carson.png"},
    {"name": "Marco Rubio", "rank": "2","size":100, "pic":"rubio.png"},    
    {"name": "Donald Trump", "rank": "3","size":100, "pic":"trump.png"},
    {"name": "Ted Cruz", "rank": "4","size":100, "pic":"cruz.png"},
    {"name": "Jeb Bush", "rank": "5","size":100, "pic":"bush.png"}
   ]
  };

  var kasich = {
   "name": "John Kasich",
   "rank": "7",
   "size":100,
   "pic": "kasich.png",
   "children": [
    {"name": "Marco Rubio", "rank": "1","size":100, "pic":"rubio.png"},
    {"name": "Ted Cruz", "rank": "2", "size":100, "pic":"cruz.png"},
    {"name": "Carly Fiorina", "rank": "3","size":100, "pic":"fiorina.png"},
    {"name": "Donald Trump", "rank": "4","size":100, "pic":"trump.png"},
    {"name": "Jeb Bush", "rank": "5","size":100, "pic":"bush.png"}
   ]
  };

  var paul = {
   "name": "Rand Paul",
   "rank": "8",
   "size":100,
   "pic": "paul.png",
   "children": [
    {"name": "Ben Carson", "rank": "1","size":100, "pic":"carson.png"},
    {"name": "Marco Rubio", "rank": "2","size":100, "pic":"rubio.png"},
    {"name": "Ted Cruz", "rank": "3", "size":100, "pic":"cruz.png"},
    {"name": "Mike Huckabee", "rank": "4","size":100, "pic":"huckabee.png"},
    {"name": "Jeb Bush", "rank": "5","size":100, "pic":"bush.png"}
   ]
  };

  var christie = {
   "name": "Chris Christie",
   "rank": "9",
   "size":100,
   "pic": "christie.png",
   "children": [
    {"name": "Marco Rubio", "rank": "1","size":100, "pic":"rubio.png"},
    {"name": "Ted Cruz", "rank": "2","size":100, "pic":"cruz.png"},
    {"name": "Donald Trump", "rank": "3","size":100, "pic":"trump.png"},
    {"name": "Ben Carson", "rank": "4","size":100, "pic":"carson.png"},
    {"name": "John Kasich", "rank": "5","size":100, "pic":"kasich.png"}
   ]
  };

  var huckabee = {
   "name": "Mike Huckabee",
   "rank": "10",
   "size":100,
   "pic": "huckabee.png",
   "children": [
    {"name": "Ted Cruz", "rank": "1","size":100, "pic":"cruz.png"},
    {"name": "Rand Paul", "rank": "2","size":100, "pic":"paul.png"},
    {"name": "Donald Trump", "rank": "3","size":100, "pic":"trump.png"},
    {"name": "Jeb Bush", "rank": "4","size":100, "pic":"bush.png"},
    {"name": "John Kasich", "rank": "5","size":100, "pic":"kasich.png"}
   ]
  };

var graham = {
   "name": "Lindsey Graham",
   "rank": "11",
   "size":100,
   "pic": "graham.png",
   "children": [
    {"name": "Ted Cruz", "rank": "1","size":100, "pic":"cruz.png"},
    {"name": "Carly Fiorina","rank": "2", "size":100, "pic":"fiorina.png"},
    {"name": "Marco Rubio", "rank": "3","size":100, "pic":"rubio.png"},
    {"name": "Bobby Jindal","rank": "4", "size":100, "pic":"jindal.png"},
    {"name": "Rand Paul", "rank": "5","size":100, "pic":"paul.png"}
   ]
  };


var jindal = {
   "name": "Bobby Jindal",
   "rank": "12",
   "size":100,
   "pic": "jindal.png",
   "children": [
    {"name": "Ted Cruz", "rank": "1","size":100, "pic":"cruz.png"},
    {"name": "Rick Santorum", "rank": "2","size":100, "pic":"santorum.png"},
    {"name": "Ben Carson", "rank": "3","size":100, "pic":"carson.png"},
    {"name": "Marco Rubio", "rank": "4","size":100, "pic":"rubio.png"},
    {"name": "Jeb Bush", "rank": "5","size":100, "pic":"bush.png"}
   ]
  };

 var santorum = {
   "name": "Rick Santorum",
   "rank": "13",
   "size":100,
   "pic": "santorum.png",
   "children": [
    {"name": "Ted Cruz", "rank": "1","size":100, "pic":"cruz.png"},
    {"name": "Bobby Jindal", "rank": "2","size":100, "pic":"jindal.png"},
    {"name": "Lindsey Graham", "rank": "3","size":100, "pic":"graham.png"},
    {"name": "Jeb Bush", "rank": "4","size":100, "pic":"bush.png"},
    {"name": "Mike Huckabee", "rank": "5","size":100, "pic":"huckabee.png"}
   ]
  };

  var pataki = {
   "name": "George Pataki",
   "rank": "14",
   "size":100,
   "pic": "pataki.png",
   "children": [
    {"name": "Rick Santorum", "rank": "1","size":100, "pic":"santorum.png"},
    {"name": "Donald Trump", "rank": "2","size":100, "pic":"trump.png"},
    {"name": "Bobby Jindal", "rank": "3","size":100, "pic":"jindal.png"},
    {"name": "Chris Christie", "rank": "4","size":100, "pic":"christie.png"},
    {"name": "Ted Cruz", "rank": "5","size":100, "pic":"cruz.png"} 
   ]
  };

  var gilmore = {
   "name": "Jim Gilmore",
   "rank": "15",
   "size":100,
   "pic": "gilmore.png",
   "children": [
    {"name": "Ted Cruz", "rank": "1","size":100, "pic":"cruz.png"},
    {"name": "Mike Huckabee", "rank": "2","size":100, "pic":"huckabee.png"},
    {"name": "Carly Fiorina", "rank": "3","size":100, "pic":"fiorina.png"}
   ]
  };



