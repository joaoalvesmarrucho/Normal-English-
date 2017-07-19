# Ordinary (english version)
The Ordinary Chrome extension useful to read some texts and identify hidden systemic racism. It turns "aboriginal", "asian", "black", "caucasian", "gipsy", "irish", "latino", "white", "romani" and other terms to define ethnicities into "ordinary". Leave a comment if you want to add your own race/ethnicity and we will try to add it to the Chrome Extension as soon as possible.

Chrome Extension link: https://chrome.google.com/webstore/detail/normal-english-version/ehdecgcibdegfgcmjoglcinlhpgboipf

# Acknowledging Issues
## The word "Ordinary"
We have considered using other words instead of "Ordinary" but for now it seems like the reasons for using "Ordinary" outwheight the reasons not to.

Alternative outputs: "Undefined", "Person", " "(empty string so that "White people" becomes just "people"), "Normal" (this extension initially used "Normal");

By chosing "ordinary" we hope to match the syntactic function of the racial adjective, maintaining the reading flow, while strengthening the idea that our skin colour should not make us privileged nor underprivileged.

## Plurals and Letter Case 
The content.js file holds the array of Key Pairs and needs manual input for all scenarios (plurals and different letter cases). We are sure both plural and smallcase/uppercase converstions could be automated. let us know if you  fix this please.

## Other possible improvements
1) Allow the user to add any word to be array (using Local storage)

2) Allow for an optional "Always on" so that the changes are made as soon as the webpage is loaded (designing an input panel on the  popup.html)
