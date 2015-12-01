# HOW TO USE THE TEMPLATE: 
	
# 1.Have 2 data files ready  

  IMPORTANT! Save the files as .js and make sure all the objects in the parent level and the children level are the same. Such as if the parent level has "name","rank","size" and "pic", the children level should have the same. 

  -allcandidates_entire.js   
  This is the data file for the initial view with all candidates on one page.

  -allcandidates_seperate.js 
  This is the data file for the view once users click into each individual candidate. Since the parent node for the individual page is different, you need to declare variables for each candidate. I use each candidate's last name as the variable name. 
  
  

# 2.Things to change for future use   
   - Change each candidate's variable name in the .js files accordingly, and then change the root names from Line 343 to Line 372 in index.html to each candidate's variable.


# 3.Mobile-friendly 
  - I set the screenWidth smaller than 420px as mobileScreen. When it says, such as "mobileScreen?  -35: -height/27", it means if it's mobileScreen (true), it should be "-35", if it's not mobileScreen (false), it should be "-height/27"
  - The image size is dynamic according to the windowHeight. Depending on how many images are there in one view (vertically), I usually set the height & width of each image to height/ (numbers of images + 1)




