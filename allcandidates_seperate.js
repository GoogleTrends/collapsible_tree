 var trump = {
   "name": "Donald Trump",
   "rank": "1",
   "size":100,
   "pic": "trump.png",
   "children": [
    {"name": "Ben Carson", "rank": "1", "size":100, "pic":"carson.png"},
    {"name": "Carly Fiorina", "rank": "2", "size":100, "pic":"fiorina.png"},
    {"name": "Jeb Bush", "rank": "3","size":100, "pic":"bush.png"},
    {"name": "Marco Rubio", "rank": "4", "size":100, "pic":"rubio.png"},
    {"name": "Ted Cruz", "rank": "5","size":100, "pic":"cruz.png"}
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
    {"name": "Jeb Bush", "rank": "4","size":100, "pic":"bush.png"},
    {"name": "Ted Cruz", "rank": "5","size":100, "pic":"cruz.png"}   
   ]
  };

  var fiorina = {
   "name": "Carly Fiorina",
   "rank": "3",
   "size":100,
   "pic": "fiorina.png",
   "children": [
    {"name": "Donald Trump", "rank": "1","size":100, "pic":"trump.png"},
    {"name": "Ben Carson", "rank": "2","size":100, "pic":"carson.png"},
    {"name": "Marco Rubio", "rank": "3","size":100, "pic":"rubio.png"},
    {"name": "Jeb Bush", "rank": "4","size":100, "pic":"bush.png"},
    {"name": "Ted Cruz", "rank": "5","size":100, "pic":"cruz.png"}
   ]
  };

  var bush = {
   "name": "Jeb Bush",
   "rank": "4",
   "size":100,
   "pic": "bush.png",
   "children": [
    {"name": "Donald Trump", "rank": "1","size":100, "pic":"trump.png"},
    {"name": "Carly Fiorina", "rank": "2","size":100, "pic":"fiorina.png"},
    {"name": "Marco Rubio", "rank": "3","size":100, "pic":"rubio.png"},
    {"name": "Ben Carson", "rank": "4","size":100, "pic":"carson.png"},
    {"name": "Ted Cruz", "rank": "5","size":100, "pic":"cruz.png"}
   ]
  };

  var rubio = {
   "name": "Marco Rubio",
   "rank": "5",
   "size":100,
   "pic": "rubio.png",
   "children": [
    {"name": "Ted Cruz", "rank": "1","size":100, "pic":"cruz.png"},
    {"name": "Carly Fiorina","rank": "2", "size":100, "pic":"fiorina.png"},
    {"name": "Donald Trump", "rank": "3","size":100, "pic":"trump.png"},
    {"name": "Ben Carson", "rank": "4","size":100, "pic":"carson.png"},
    {"name": "Jeb Bush", "rank": "5","size":100, "pic":"bush.png"}
   ]
  };

  var cruz = {
   "name": "Ted Cruz",
   "rank": "6",
   "size":100,
   "pic": "cruz.png",
   "children": [
    {"name": "Marco Rubio", "rank": "1","size":100, "pic":"rubio.png"},
    {"name": "Ben Carson", "rank": "2","size":100, "pic":"carson.png"},
    {"name": "Donald Trump", "rank": "3","size":100, "pic":"trump.png"},
    {"name": "Carly Fiorina", "rank": "4","size":100, "pic":"fiorina.png"},
    {"name": "Rand Paul", "rank": "5","size":100, "pic":"paul.png"}
   ]
  };

  var paul = {
   "name": "Rand Paul",
   "rank": "7",
   "size":100,
   "pic": "paul.png",
   "children": [
    {"name": "Donald Trump", "rank": "1","size":100, "pic":"trump.png"},
    {"name": "Ted Cruz", "rank": "2", "size":100, "pic":"cruz.png"},
    {"name": "Marco Rubio", "rank": "3","size":100, "pic":"rubio.png"},
    {"name": "Ben Carson", "rank": "4","size":100, "pic":"carson.png"},
    {"name": "Carly Fiorina", "rank": "5","size":100, "pic":"fiorina.png"}
   ]
  }; 

  var christie = {
   "name": "Chris Christie",
   "rank": "8",
   "size":100,
   "pic": "christie.png",
   "children": [
    {"name": "Carly Fiorina", "rank": "1","size":100, "pic":"fiorina.png"},
    {"name": "Donald Trump", "rank": "2","size":100, "pic":"trump.png"},
    {"name": "Marco Rubio", "rank": "3","size":100, "pic":"rubio.png"},
    {"name": "Ben Carson", "rank": "4","size":100, "pic":"carson.png"},
    {"name": "Jeb Bush", "rank": "5","size":100, "pic":"bush.png"}
   ]
  }; 

  var huckabee = {
   "name": "Mike Huckabee",
   "rank": "9",
   "size":100,
   "pic": "huckabee.png",
   "children": [
    {"name": "Ted Cruz", "rank": "1","size":100, "pic":"cruz.png"},
    {"name": "Ben Carson", "rank": "2","size":100, "pic":"carson.png"},
    {"name": "Carly Fiorina", "rank": "3","size":100, "pic":"fiorina.png"},
    {"name": "Marco Rubio", "rank": "4","size":100, "pic":"rubio.png"},
    {"name": "Rand Paul", "rank": "5","size":100, "pic":"paul.png"}
   ]
  };

  var kasich = {
   "name": "John Kasich",
   "rank": "10",
   "size":100,
   "pic": "kasich.png",
   "children": [
    {"name": "Carly Fiorina","rank": "1", "size":100, "pic":"fiorina.png"},
    {"name": "Marco Rubio", "rank": "2","size":100, "pic":"rubio.png"},
    {"name": "Ted Cruz", "rank": "3","size":100, "pic":"cruz.png"},
    {"name": "Ben Carson", "rank": "4","size":100, "pic":"carson.png"},
    {"name": "Rand Paul", "rank": "5","size":100, "pic":"paul.png"}
   ]
  };

var graham = {
   "name": "Lindsey Graham",
   "rank": "11",
   "size":100,
   "pic": "graham.png",
   "children": [
    {"name": "Bobby Jindal","rank": "1", "size":100, "pic":"jindal.png"},
    {"name": "Rick Santorum", "rank": "2","size":100, "pic":"santorum.png"},
    {"name": "Carly Fiorina","rank": "3", "size":100, "pic":"fiorina.png"},
    {"name": "Donald Trump", "rank": "4","size":100, "pic":"trump.png"},
    {"name": "George Pataki", "rank": "5","size":100, "pic":"pataki.png"}
   ]
  }; 


var jindal = {
   "name": "Bobby Jindal",
   "rank": "12",
   "size":100,
   "pic": "jindal.png",
   "children": [
    {"name": "Lindsey Graham", "rank": "1","size":100, "pic":"graham.png"},
    {"name": "Donald Trump", "rank": "2","size":100, "pic":"trump.png"},
    {"name": "Ben Carson", "rank": "3","size":100, "pic":"carson.png"},
    {"name": "Rick Santorum", "rank": "4","size":100, "pic":"santorum.png"},
    {"name": "Carly Fiorina", "rank": "5","size":100, "pic":"fiorina.png"}
   ]
  };

 var pataki = {
   "name": "George Pataki",
   "rank": "13",
   "size":100,
   "pic": "pataki.png",
   "children": [
    {"name": "Lindsey Graham", "rank": "1","size":100, "pic":"graham.png"},
    {"name": "Bobby Jindal", "rank": "2","size":100, "pic":"jindal.png"},
    {"name": "Rick Santorum", "rank": "3","size":100, "pic":"trump.png"},
    {"name": "Rand Paul", "rank": "4","size":100, "pic":"paul.png"},
    {"name": "John Kasich", "rank": "5","size":100, "pic":"kasich.png"}
   ]
  };

  var santorum = {
   "name": "Rick Santorum",
   "rank": "14",
   "size":100,
   "pic": "santorum.png",
   "children": [
    {"name": "Lindsey Graham", "rank": "1","size":100, "pic":"graham.png"},
    {"name": "Bobby Jindal", "rank": "2","size":100, "pic":"jindal.png"},
    {"name": "George Pataki", "rank": "3","size":100, "pic":"pataki.png"},
    {"name": "Marco Rubio", "rank": "4","size":100, "pic":"rubio.png"},
    {"name": "Carly Fiorina", "rank": "5","size":100, "pic":"fiorina.png"}
   ]
  };

  var gilmore = {
   "name": "Jim Gilmore",
   "rank": "15",
   "size":100,
   "pic": "gilmore.png",
   "children": [
    {"name": "George Pataki", "rank": "1", "size":100, "pic":"pataki.png"},
    {"name": "Rick Santorum", "rank": "2","size":100, "pic":"santorum.png"},
    {"name": "Lindsey Graham", "rank": "3","size":100, "pic":"graham.png"},
    {"name": "Carly Fiorina", "rank": "4","size":100, "pic":"fiorina.png"},
    {"name": "Rand Paul", "rank": "5","size":100, "pic":"paul.png"}
   ]
  };



